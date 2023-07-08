import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)
    
    const decrement = () => {
        if(count > 1) setCount(prev => prev - 1)
    }

    const increment = () => {
        if(count < stock) setCount(prev => prev + 1)
    }

    return (
        <div className="boton">
            <h3 className="boton1">{count}</h3>
            <button onClick={decrement}className="contador decrement-button">-</button>
            <button onClick={() => onAdd(count)}className="contador agregar-carrito">Agregar al carrito </button>
            <button onClick={increment}className="contador increment-button">+</button>
        </div>
    )
}

export default ItemCount