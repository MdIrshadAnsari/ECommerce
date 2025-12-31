import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
const App = () => {
  return (
    <div className="w-full h-screen">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}></Route>
     </Routes>
    </div>
  );
};

export default App;
