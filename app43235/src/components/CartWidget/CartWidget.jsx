import cart from './assets/icons8-shopping-cart-94.png'
import { useCart } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div>
            <img src={cart} alt='cart-widget'/>
            <Link><Cart></Cart></Link>
            {totalQuantity}
        </div>
    )
}

export default CartWidget
