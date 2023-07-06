import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import ItemCount from '../ItemCount/ItemCount';
import Checkout from '../Checkout/Checkout';
import CartContext from '../Context/CartContext'

const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const [stock, setStock] = useState(0);
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

  const handleAddToCart = (addItem, count) => {
    if (count > stock) {
      
      return;
    }

    const itemToAdd = {
      id: product.id,
      name: product.nombre,
      price: product.precio,
      quantity: count
    };

    addItem(itemToAdd, count);
    setStock(prevStock => prevStock - count);
  };

  if (!product) {
    return <h1>Cargando...</h1>;
  }

  return (
    <CartContext.Consumer>
      {({ addItem }) => (
        <div className="item-detail">
          <img src={product.imagen} alt={product.nombre} />
          <p>${product.precio}</p>
          <h1>{product.nombre}</h1>
          <p>{product.descripcion}</p>
         
          <ItemCount stock={stock} onAdd={(count) => handleAddToCart(addItem, count)} />

          <div className="cart-items">
            <h2>Cart Items:</h2>
            
          </div>
         
        </div>
      )}
    </CartContext.Consumer>
  );
};

export default ItemDetail;
