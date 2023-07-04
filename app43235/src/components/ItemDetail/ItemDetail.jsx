import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

import { useCart } from "../Context/CartContext"
import { useNotification } from "../../notification/NotificationService"

const ItemDetail = ({ id, nombre, categoria, descripcion, imagen, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        console.log(quantity)
        setQuantity(quantity)

        const objProduct = {
            id, nombre, precio, quantity
        }

        addItem(objProduct)
        setNotification('error', `Se agrego correctamente ${quantity} ${nombre} al carrito`, 5)
    }

    return (
        <div>
            <h1>{nombre}</h1>
            <img src={img} alt={nombre} style={{ width: 100}} />
            <p>Categoria: {categoria}</p>
            <p>${precio}</p>
            <p>Descripcion: {descripcion}</p>
            {
                quantity == 0 
                    ? ( stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p>)
                    : <button>finalizar compra</button>
            }
        </div>
    )
}

export default ItemDetail