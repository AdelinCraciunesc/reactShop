import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import { Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Home from "./pages/Home";

const App = () => {
  const [cartItems, setCartItems] = React.useState(0);
  const firstThreeSneakers = [
    {
      name: "Abibas",
      Model: "YeezyV1",
      image:
        "https://sneakerindustry.ro/100093-product_cover/x-psg-air-200e.jpg",
      size: ["41, 42"],
      price: 120,
      brand: "https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png",
    },
    {
      name: "Nikecss",
      Model: "Voosh",
      image:
        "https://sneakerindustry.ro/102393-product_cover/slipstream-always-on.jpg",
      size: ["40, 42, 45"],
      price: 80,
      brand:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png",
    },
    {
      name: "Filandro",
      Model: "Armonica",
      image: "https://sneakerindustry.ro/102839-product_cover/oznova.jpg",
      size: ["41, 42, 43"],
      price: 175,
      brand:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png",
    }
  ];

  return (
    <div>
      <NavbarTop />
      <Navbar
        firstThreeSneakers={firstThreeSneakers}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      {/* <FeaturedSneakers images={SliderImages} delay={delay} text={text}/>
      <Categories />
      <HotSneakers cartItems={cartItems} setCartItems={setCartItems} sneakers={Sneakers} /> */}
      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
