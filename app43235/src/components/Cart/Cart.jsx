import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, totalQuantity, totalPurchase, clearCart } = useCart();

  return (
    <div className='cart'>
      <h1>Carrito de compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío!</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.nombre} - Cantidad: {product.quantity}
              </li>
            ))}
          </ul>
          <p>Total de productos: {totalQuantity}</p>
          <p>Total de la compra: {totalPurchase} pesos</p>

          <button onClick={clearCart} className='button'>Limpiar carrito</button>
          <br /><br />
          <div className='centered-button'>
          <Link to="/checkout">
            <button className='button'>Realizar pedido</button>
          </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
