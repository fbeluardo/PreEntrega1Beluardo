import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import './Item.css';

const Item = ({ id, nombre, imagen, precio }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id,
      nombre,
      imagen,
      precio,
      quantity,
    };
    addItem(productToAdd, quantity);
  };

  return (
    <div className="item">
      <img src={imagen} alt={nombre} />
      <p>${precio}</p>
      <h1>{nombre}</h1>
      <div>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
      <div className='ver-detalle'>
      <Link to={`/item/${id}`}>Ver detalle producto</Link>
      </div>
    </div>
  );
};

export default Item;
