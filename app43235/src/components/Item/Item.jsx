import { Link } from "react-router-dom"
import './Item.css'


const Item = ({ id, nombre, imagen, precio }) => {
    return (
        <div className="item">
            <img src={imagen} alt={nombre} style={{ width: 60}} />
            <p>${precio}</p>
            <h1>{nombre}</h1>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </div>
    )
}

export default Item