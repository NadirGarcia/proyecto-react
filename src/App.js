import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import CartContainer from './components/CartContainer/CartContainer';
import CartProvider from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element= {<ItemListContainer greeting = "Los mejores destinos al mejor precio"/>} />
            <Route path='/category/:categoryId' element= {<ItemListContainer greeting = "Productos filtrados"/>} />
            <Route path='/detail/:prodId' element= {<ItemDetailContainer />} />
            <Route path='/cart' element= {<CartContainer />} />
            <Route path='/checkout' element= {<Checkout />} />
          </Routes> 
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
