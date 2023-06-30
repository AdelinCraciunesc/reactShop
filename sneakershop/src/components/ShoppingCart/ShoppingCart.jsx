import * as React from 'react';
import { Container } from '@mui/material';
import './ShoppingCart.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

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

const sneaker = Sneakers[0]
export default function ShoppingCart() {
    const [size, setSize] = React.useState('');
    const [total, setTotal] = React.useState(1);

    const handleChange = (event) => {
        console.log(event.target.value)
        setSize(event.target.value);
    };

    function handleIncrement() {
        setTotal(total + 1);
    }
    function handleDecrement() {
        setTotal(total - 1);
        if (total <= 1) {
            setTotal(1);
        }
    }

    return (
        <Container sx={{ mt: 2 }}>
            <table>
                <thead>
                    <tr className='t-top-row'>
                        <th>Your products</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img style={{ width: '200px' }} src={sneaker.image} />
                        </td>
                        <td>
                            <div>
                                <FormControl sx={{ m: 1, minWidth: 80 }}>
                                    <InputLabel id="size-label">Size</InputLabel>
                                    <Select
                                        labelId="size-select-label"
                                        id="select-id"
                                        value={size}
                                        onChange={handleChange}
                                        autoWidth
                                        label="Size"
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
                                <Button onClick={handleIncrement} sx={{ fontSize: '1.25rem', padding: 0, minWidth: 35 }} variant="contained" size="small" color="success">
                                    +
                                </Button>
                                <div>{total}</div>
                                <Button onClick={handleDecrement} sx={{ fontSize: '1.25rem', padding: 0, minWidth: 35 }} variant="contained" size="small" color="error">
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

            {/* <div className='cart-product'>
                <p>Your products:</p>
            </div> */}

            {/* <Grid
                container spacing={2}
                display={'flex'}
                alignItems={'center'}
            >
                <Grid item justifyContent='center' display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <ButtonBase sx={{ width: 300, height: 300 }}>
                        <img className='sc-image' alt="complex" src={sneaker.image} />
                    </ButtonBase>
                    <ButtonBase sx={{ width: 80, height: 40 }}>
                        Remove
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Model: {sneaker.Model}
                            </Typography>
                            <FormControl sx={{ mt: 2, minWidth: 100 }}>
                                <InputLabel id="demo-simple-select-label">Sizes</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={size}
                                    label="Sizes"
                                    onChange={handleChange}
                                >
                                    {sneaker.size.map((size, index) => (
                                        <MenuItem key={index} value={size}>{size}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            Total: {sneaker.price} €
                        </Typography>
                    </Grid>
                </Grid>
            </Grid> */}
        </Container >
    );
}