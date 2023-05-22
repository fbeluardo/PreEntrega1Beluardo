import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='App'>
      <ItemListContainer greeting={'Bienvenidos a la Tienda'}/>
      <NavBar/>
    </div>
    
  )
}

export default App
