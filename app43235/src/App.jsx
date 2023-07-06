import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Listado de productos'} />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={'Listado de producto'} />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

