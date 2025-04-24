import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';

function App() {
  return (
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Men" element={<Men/>} />
    </Routes>
    
  );
}

export default App;
