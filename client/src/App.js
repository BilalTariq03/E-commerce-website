import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import ProductDetail from './pages/ProductDetail';
import Cart from "./pages/Cart" ;

function App() {
  return (
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Men" element={<Men/>} />
      <Route path="/Women" element={<Women/>} />
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path="/Cart" element={<Cart/>} />
    </Routes>
    
  );
}

export default App;
