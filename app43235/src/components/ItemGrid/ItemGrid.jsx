const ItemGrid = ({ productos }) => {
    return (
        <div style={{ display: 'flex'}}>
            {
                productos.map(product => {
                    return <h1 key={product.id}>{product.nombre}</h1>
                })
            }
        </div>
    )
}

export default ItemGrid