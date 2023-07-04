import Item from "../Item/Item"

const ItemList = ({ productos }) => {
    return (
        <div>
            {
                productos.map(product => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ItemList