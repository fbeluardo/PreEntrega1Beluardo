import { useState, useEffect } from 'react' 
import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, establecerProducto] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productoRef = doc(db, 'productos', itemId)

        getDoc(productoRef)
            .then(querySnapshot => {
                const campos = querySnapshot.data()
                const productosAdaptados = { id: querySnapshot.id, ...campos} 

                setProduct(productosAdaptados)
            })
       
    }, [itemId])

    return (
        <div className='detalle'>
            <h1>Detalle del producto</h1>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer