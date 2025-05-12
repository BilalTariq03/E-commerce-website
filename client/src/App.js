import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import SubCategory from './pages/SubCategory';
import ProductDetail from './pages/ProductDetail';
import Cart from "./pages/Cart" ;
import CheckOut from "./pages/CheckOut" ;
// File: src/App.js
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:category" element={<CategoryPage/>}/>
            <Route path="/:category/:subcategory" element={<SubCategory />} />
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/Profile" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/CheckOut" element={<CheckOut/>} />
    </Routes>
    
        
  );
}