import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import FeaturedSneakers from "./components/FeaturedSneakers/FeaturedSneakers";
import Categories from "./components/Categories/Categories";

const App = () => {
  const images = [
    "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=826&t=st=1687009047~exp=1687009647~hmac=b606b7f29c8d13c42120282b44098ae7981d0616df9583d98f0896f509e11d15",
    "https://img.freepik.com/free-photo/cool-canvas-sneakers-men-s-apparel-summer-fashion-photoshoot_53876-105542.jpg?w=826&t=st=1687009073~exp=1687009673~hmac=72177e1139e3e61a66e532e217197614fe2766ad3cf5712a5a5ce69b8b885e03",
    "https://img.freepik.com/free-photo/female-walking-park-high-quality-photo_114579-92105.jpg?w=826&t=st=1687009100~exp=1687009700~hmac=c35ff4f4b864cb785ca64cc6c4ffe891983d1ed3e5f6255df7ba3159e9beb558",
  ];
  const SliderImages = [
    // {
    //   image:"https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=826&t=st=1687009047~exp=1687009647~hmac=b606b7f29c8d13c42120282b44098ae7981d0616df9583d98f0896f509e11d15"
    // },
    // {
    //   image:"https://img.freepik.com/free-photo/cool-canvas-sneakers-men-s-apparel-summer-fashion-photoshoot_53876-105542.jpg?w=826&t=st=1687009073~exp=1687009673~hmac=72177e1139e3e61a66e532e217197614fe2766ad3cf5712a5a5ce69b8b885e03"
    // },
    // {
    //   image:"https://img.freepik.com/free-photo/female-walking-park-high-quality-photo_114579-92105.jpg?w=826&t=st=1687009100~exp=1687009700~hmac=c35ff4f4b864cb785ca64cc6c4ffe891983d1ed3e5f6255df7ba3159e9beb558"
    // },
    {
      image:"https://ethletic.com/wp-content/uploads/2023/03/Ethletics_Twirl_Homepage_Jesse1-1536x1024.png"
    },
    {
      image:"https://ethletic.com/wp-content/uploads/2023/03/Ethletics_Twirl_Homepage_Jesse1-1536x1024.png"
    },
    {
      image:"https://ethletic.com/wp-content/uploads/2023/03/Ethletics_Twirl_Homepage_Jesse1-1536x1024.png"
    }
  ];
  const delay = 4000;
  const text = ["New Arrivals", "Best Sellers", "Hot Sales!"];

  return (
    <div>
      <NavbarTop />
      <Navbar />
      <div className="featured-sneakers-div">
        <FeaturedSneakers images={SliderImages} delay={delay} text={text} />
      </div>
      <Categories />
    </div>
  );
};

export default App;
