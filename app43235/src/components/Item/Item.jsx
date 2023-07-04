import { Link } from "react-router-dom"

const Item = ({ id, nombre, imagen, precio }) => {
    return (
        <div>
            <h1>{nombre}</h1>
            <img src={imagen} alt={nombre} style={{ width: 100}} />
            <p>${precio}</p>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </div>
    )
}

export default Item