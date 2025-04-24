import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import ProductDetail from './pages/ProductDetail';
import Cart from "./pages/Cart" ;
// File: src/App.js
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Men" element={<Men/>} />
            <Route path="/Women" element={<Women/>} />
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/Profile" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
    </Routes>
    
        
  );
}