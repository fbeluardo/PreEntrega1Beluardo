import { useEffect, useState, memo } from 'react'
import ItemList from '../ItemList/ItemList'
import ItemGrid from '../ItemGrid/ItemGrid'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [productos, establecerProductos] = useState([])
    const [desplegarGrid, establecerdisplayGrid] = useState(false)
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        const productosRef = !categoriaId 
            ? collection(db, 'productos')
            : query(collection(db, 'productos'), where('categoria', '==', categoriaId))

        setLoading(true)
        getDocs(productosRef)
            .then(querySnapshot =>{
                const productosAdaptados = querySnapshot.docs.map(doc => {
                    const campos = doc.data()
                    return { id: doc.id, ...campos }
                }) 
                
                establecerProductos(productosAdaptados)
            })
            .finally(() => {
                setLoading(false)
            })
            
    }, [categoriaId])
    
    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            { desplegarGrid ? <ItemGrid productos={productos}/> : <ItemListMemo productos={productos}/>}
        </div>
    )
}

export default ItemListContainer