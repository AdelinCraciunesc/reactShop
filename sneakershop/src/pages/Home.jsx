import React from 'react'
import Categories from '../components/Categories/Categories'
import FeaturedSneakers from '../components/FeaturedSneakers/FeaturedSneakers'
import HotSneakers from '../components/HotSneakers/HotSneakers'

const Home = ({ cartItems, setCartItems }) => {
    const SliderImages = [
        {
            image: "https://i.imgur.com/vuQoEza.jpg"
        },
        {
            image: "https://i.imgur.com/5lFFjqk.jpg"
        },
        {
            image: "https://i.imgur.com/5J8t6Ul.jpg"
        }
    ];
    const Sneakers = [
        {
            name: "Abibas",
            Model: "YeezyV1",
            image: "https://sneakerindustry.ro/100093-product_cover/x-psg-air-200e.jpg",
            size: ["41, 42"],
            price: 120,
            brand: "https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png"
        },
        {
            name: "Nikecss",
            Model: "Voosh",
            image: "https://sneakerindustry.ro/102393-product_cover/slipstream-always-on.jpg",
            size: ["40, 42, 45"],
            price: 80,
            brand: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png"
        },
        {
            name: "Filandro",
            Model: "Armonica",
            image: "https://sneakerindustry.ro/102839-product_cover/oznova.jpg",
            size: ["41, 42, 43"],
            price: 175,
            brand: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png"
        },
        {
            name: "Onomastik",
            Model: "Taro",
            image: "https://sneakerindustry.ro/104998-product_cover/x-mercedes-rs-x.jpg",
            size: ["41, 42, 45"],
            price: 250,
            brand: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png"
        },
    ]


    const delay = 4000;
    const text = ["New Arrivals", "Best Sellers", "Hot Sales!", "Never get out of fashion"];

    return (
        <div>
            <FeaturedSneakers images={SliderImages} delay={delay} text={text} />
            <Categories />
            <HotSneakers cartItems={cartItems} setCartItems={setCartItems} sneakers={Sneakers} />
        </div>
    )
}

export default Home