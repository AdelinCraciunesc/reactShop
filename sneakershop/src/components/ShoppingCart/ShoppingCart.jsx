import * as React from 'react';
import { Container } from '@mui/material';
import './ShoppingCart.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const Sneakers = [
    {
        name: "Abibas",
        Model: "YeezyV1",
        image: "https://sneakerindustry.ro/100093-product_cover/x-psg-air-200e.jpg",
        size: [41, 42, 43],
        price: 120,
        brand: "https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png"
    }
]

const adressDetails = {
    fullName: "Your full name",
    phoneNumber: "Your phone number",
    country: "Your country",
    city: "Your city",
    street: "Your street",
    postalCode: "Your postal code",
}

const adressArr = Object.values(adressDetails)

const sneaker = Sneakers[0]
export default function ShoppingCart() {
    const [size, setSize] = React.useState(sneaker.size[0]);
    const [total, setTotal] = React.useState(1);
    const [quantity, setQuantity] = React.useState(1);  // ADD LOGIC WHEN OTHER SIZE IS CLICKED => NEW PRODUCT ADDED //

    const handleChange = (event) => {
        console.log(event.target.value)
        setQuantity(event.target.value);
    };

    function handleIncrement() {
        setQuantity(quantity + 1);
    }
    function handleDecrement() {
        setQuantity(quantity - 1);
        if (quantity <= 1) {
            setQuantity(1);
        }
    }

    function handleSelect(event) {
        setSize(event.target.value);
    }

    return (
        <Container className='shopping-cart-container' sx={{ mt: 2 }}>
            <table className='table-container'>
                <thead>
                    <tr className='t-top-row'>
                        <th>1. Your products</th>  {/* add product title above or under image later */}
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img className='sc-image' src={sneaker.image} />
                        </td>
                        <td>
                            <div>
                                <FormControl className='size-selector'>
                                    <Select
                                        id="select-id"
                                        value={size}
                                        onChange={handleSelect}
                                        autoWidth
                                    >
                                        {sneaker.size.map((size, index) => (
                                            <MenuItem key={index} value={size}>{size}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </td>
                        <td>
                            {/* add functionality later for quantity */}
                            <div className='quantity-selector'>
                                <Button sx={{ width: 30, minHeight: 0, minWidth: 0, padding: 0 }} className='qty-btn' onClick={handleIncrement}

                                    variant="text" color="success">
                                    +
                                </Button>
                                <div className='quantity-wrap'>
                                    {quantity}
                                </div>
                                <Button sx={{ width: 30, minHeight: 0, minWidth: 0, padding: 0 }} className='qty-btn' onClick={handleDecrement}
                                    variant="text" color="error">
                                    -
                                </Button>
                            </div>
                        </td>
                        <td>
                            {sneaker.price}
                        </td>
                        <td>
                            {/* should increase based on quantity */}
                            {total}
                        </td>
                    </tr>
                </tbody>
            </table>
            <Box sx={{ flexGrow: 1 }}>
                <div className='adress-div'>
                    2. Your address
                </div>
                <p>Please enter your address:</p>
                <div className='adress-details-div'>
                    {adressArr.map((adress, index) => (
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue={adress}
                        />
                    ))}
                </div>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <div className='delivery-div'>
                    3. Delivery method
                </div>
                <p>Please select your delivery method:</p>
            </Box>
        </Container >
    );
}