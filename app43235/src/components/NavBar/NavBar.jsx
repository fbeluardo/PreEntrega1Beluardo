import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
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