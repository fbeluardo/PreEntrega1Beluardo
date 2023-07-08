import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import ItemCount from '../ItemCount/ItemCount';
import Checkout from '../Checkout/Checkout';
import { useCart } from '../Context/CartContext';
import './ItemDetail.css'

const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const [stock, setStock] = useState(0);
  const { itemId } = useParams();
  const { addItem, clearCart } = useCart();

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
      return;
    }

    const itemToAdd = {
      id: product.id,
      nombre: product.nombre,
      price: product.precio,
      quantity: count
    };

    addItem(itemToAdd, count);
    setStock(prevStock => prevStock - count);
  };

  if (!product) {
    return <h1 className='h1'>Cargando...</h1>;
  }

  return (
    <div className="item-detail">
      <img src={product.imagen} alt={product.nombre} />
      <p>${product.precio}</p>
      <h1>{product.nombre}</h1>

      <ItemCount stock={stock} onAdd={handleAddToCart} />

      <div className="cart-items">
        <h2></h2>
    
      </div>

      <button onClick={clearCart}className='button'>Limpiar Carrito</button>
    </div>
  );
};

export default ItemDetail;
