import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Cart = () => {
  const { cart, totalQuantity } = useCart();

  return (
    <div>
      <h1>Carrito de compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.nombre} - Cantidad: {product.quantity}
              </li>
            ))}
          </ul>
          <p>Total: {totalQuantity}</p>
          <Link to="/checkout">Realizar pedido</Link>
        </>
      )}
    </div>
  );
};

export default Cart;
