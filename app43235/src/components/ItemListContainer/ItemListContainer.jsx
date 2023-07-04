import './ItemListContainer.css'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useEffect } from 'react'

useEffect(() => {
const productosRef = collection(db, 'productos')

getDocs(productosRef)
.then(snapshot => 
    console.log (snapshot)

})

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='Saludo'>
            <h1>{greeting}</h1>
        </div>
    )
}
export default ItemListContainer