import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import './NavBar.css'


const NavBar = () => {
    return (
        <nav>
            <Logo/>
            <h3>Tienda Drogueria INSA </h3>
            <div className="btn">
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