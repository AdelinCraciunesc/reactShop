import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import FeaturedSneakers from "./components/FeaturedSneakers/FeaturedSneakers";
import Categories from "./components/Categories/Categories";
import HotSneakers from "./components/HotSneakers/HotSneakers";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Home from "./pages/Home";

const App = () => {
  const [cartItems, setCartItems] = React.useState(0);

  return (
    <div>
      <NavbarTop />
      <Navbar cartItems={cartItems} setCartItems={setCartItems}
      />
      {/* <FeaturedSneakers images={SliderImages} delay={delay} text={text}/>
      <Categories />
      <HotSneakers cartItems={cartItems} setCartItems={setCartItems} sneakers={Sneakers} /> */}
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </div>
  );
};

export default App;
