import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"

const NavBar = () => {
    return (
        <nav>
            <Logo/>
            <h3>Tienda Drogueria INSA </h3>
            <div>
                <button>Insumos médicos</button>
                <button>Antisepticos</button>
                <button>Alcoholes</button>
                <button>Medicamentos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar