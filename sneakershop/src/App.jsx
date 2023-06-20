import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import FeaturedSneakers from "./components/FeaturedSneakers/FeaturedSneakers";
import Categories from "./components/Categories/Categories";
import HotSneakers from "./components/HotSneakers/HotSneakers";

const App = () => {
  const SliderImages = [
    {
      image:"https://i.imgur.com/vuQoEza.jpg"
    },
    {
      image:"https://i.imgur.com/5lFFjqk.jpg"
    },
    {
      image:"https://i.imgur.com/5J8t6Ul.jpg"
    }
  ];
  const Sneakers = [
      {
        name:"Adidas",
        Model: "Adidas Yeezy",
        image:"https://sizeer.ro/media/cache/gallery/rc/eh0k21eq/adidas-treziod-2-barbati-sneakers-verde-gy0045.jpg",
        size: [41,42,43],
        price: 200,
        brand: "https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png"
      },
      {
        name:"Nike",
        Model: "Nike Air Jordan",
        image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-shoes-HMVqph.png",
        size: [41,42,43],
        price: 200,
        brand: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png"
      },
      {
        name:"Nike",
        Model: "Nike Air Jordan",
        image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-shoes-HMVqph.png",
        size: [41,42,43],
        price: 200,
        brand: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png"
      },
      {
        name:"Nike",
        Model: "Nike Air Jordan",
        image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/23696ebc-18fc-46f9-8a88-c854930ad24c/air-jordan-1-retro-high-shoes-HMVqph.png",
        size: [41,42,43],
        price: 200,
        brand: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png"
      },
  ]

  const delay = 4000;
  const text = ["New Arrivals", "Best Sellers", "Hot Sales!", "Never get out of fashion"];

  return (
    <div>
      <NavbarTop />
      <Navbar />
      <div className="featured-sneakers-div">
        <FeaturedSneakers images={SliderImages} delay={delay} text={text} />
      </div>
      <Categories />
      <HotSneakers sneakers={Sneakers}/>
    </div>
  );
};

export default App;
