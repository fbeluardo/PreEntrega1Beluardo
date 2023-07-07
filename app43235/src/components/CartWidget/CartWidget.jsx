import cart from './assets/icons8-shopping-cart-94.png';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <div className='cart-widget'>
            <Link to="/cart">
                <img src={cart} alt='cart-widget' />
            </Link>
            {totalQuantity}
        </div>
    );
};

export default CartWidget;

