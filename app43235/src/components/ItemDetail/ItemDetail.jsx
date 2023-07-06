import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const [stock, setStock] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPurchase, setTotalPurchase] = useState(0);
  const { itemId } = useParams();

  useEffect(() => {
    const productRef = doc(db, 'productos', itemId);

    const unsubscribe = onSnapshot(productRef, (querySnapshot) => {
      const campos = querySnapshot.data();
      const productAdapted = { id: querySnapshot.id, ...campos };
      setProduct(productAdapted);
      setStock(campos.stock);
    });

    return () => unsubscribe();
  }, [itemId]);

  const handleAddToCart = (count) => {
    if (count > stock) {
      // Prevent adding more items than available stock
      return;
    }

    const itemToAdd = {
      id: product.id,
      name: product.nombre,
      price: product.precio,
      quantity: count
    };

    setCartItems(prevItems => [...prevItems, itemToAdd]);
    setTotalPurchase(prevTotal => prevTotal + (product.precio * count));
    setStock(prevStock => prevStock - count);
  };

  if (!product) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="item-detail">
      <img src={product.imagen} alt={product.nombre} />
      <p>${product.precio}</p>
      <h1>{product.nombre}</h1>
      <p>{product.descripcion}</p>
      {/* Add any other details you want to display */}
      <ItemCount stock={stock} onAdd={handleAddToCart} />

      <div className="cart-items">
        <h2>Cart Items:</h2>
        {cartItems.map(item => (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <p>Total Purchase: ${totalPurchase}</p>
    </div>
  );
};

export default ItemDetail;
