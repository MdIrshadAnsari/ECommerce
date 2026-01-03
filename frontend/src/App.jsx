import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Collections from "./pages/Collections";
import About from "./components/About/About";
import Orders from "../src/pages/Orders"
const App = () => {
  return (
    <div className="w-full h-screen">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
       <Route path="/collection" element={<Collections/>}/>
         <Route path="/orders" element={<Orders/>}/>
     </Routes>
    </div>
  );
};

export default App;
