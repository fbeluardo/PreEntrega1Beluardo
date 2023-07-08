import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { NotificationProvider } from './notification/NotificationService';

function App() {
  return (
    <BrowserRouter>
    <NotificationProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Catálogo de productos'} />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={'Catálogo de productos'} />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;

