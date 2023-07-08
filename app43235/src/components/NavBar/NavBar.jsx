import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import './NavBar.css'


const NavBar = () => {
    return (
        <nav>
            <Logo/>
            <h3>Tienda Droguería INSA </h3>
            <div className="menu">
                <Link to={'/categoria/insumos medicos'} className="menu-link">Descartables</Link>
                <br />
                <Link to={'/categoria/antisepticos'}className="menu-link">Antisepticos</Link>
                <br />
                <Link to={'/categoria/alcoholes'}className="menu-link">Alcoholes</Link>
                <br />
		        <Link to={'/categoria/medicamentos'}className="menu-link">Medicamentos</Link>
            </div>
            <br />
            <CartWidget/>
        </nav>
    )
}
export default NavBar