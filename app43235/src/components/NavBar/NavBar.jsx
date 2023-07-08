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
                <Link to={'/categoria/insumos medicos'}>Descartables</Link>
                <br />
                <Link to={'/categoria/antisepticos'}>Antisepticos</Link>
                <br />
                <Link to={'/categoria/alcoholes'}>Alcoholes</Link>
                <br />
		        <Link to={'/categoria/medicamentos'}>Medicamentos</Link>
            </div>
            <br />
            <CartWidget/>
        </nav>
    )
}
export default NavBar