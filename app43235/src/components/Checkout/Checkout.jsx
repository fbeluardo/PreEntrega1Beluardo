import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore";
import { useCart } from "../Context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { useNotification } from "../../notification/NotificationService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Checkout.css'

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, clearCart } = useCart();
  const { setNotification } = useNotification();
  const navigate = useNavigate();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const createOrder = async () => {
    setLoading(true);
    const objOrder = {
      buyer: customerInfo,
      items: cart,
      total: calculateTotal(),
    };

    try {
      const ids = cart.map((prod) => prod.id);

      const productsRef = query(collection(db, "products"), where(documentId(), "in", ids));

      const { docs } = await getDocs(productsRef);

      const batch = writeBatch(db);

      const outOfStock = [];

      docs.forEach((doc) => {
        const fieldsDoc = doc.data();
        const stockDb = fieldsDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fieldsDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit(); // Wait for the batch commit to complete

        const ordersRef = collection(db, "orders");

        const { id } = await addDoc(ordersRef, objOrder);

        setNotification("success", "La orden fue generada correctamente, el id es: " + id);
        clearCart();
        navigate("/");
      } else {
        setNotification("error", "Hay productos que no tienen stock");
      }
    } catch (error) {
      setNotification("error", "Hubo un error en la generación de la orden");
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  return (
    <>
      <h1>Checkout</h1>
      <h2>Formulario</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" value={customerInfo.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Teléfono:
          <input type="text" name="phone" value={customerInfo.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={customerInfo.email} onChange={handleChange} />
        </label>
        <br />
        <button onClick={createOrder}>Generar orden de compra</button>
      </form>
    </>
  );
};

export default Checkout;

