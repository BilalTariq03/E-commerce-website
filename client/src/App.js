import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Cart from "./pages/Cart" ;

function App() {
  return (
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Men" element={<Men/>} />
      <Route path="/Cart" element={<Cart/>} />
    </Routes>
    
  );
}

export default App;
