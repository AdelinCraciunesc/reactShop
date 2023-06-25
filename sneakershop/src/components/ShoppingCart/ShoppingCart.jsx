import * as React from 'react';
import { Container } from '@mui/material';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

const Sneakers = [
    {
        name: "Abibas",
        Model: "YeezyV1",
        image: "https://sneakerindustry.ro/100093-product_cover/x-psg-air-200e.jpg",
        size: ["41, 42"],
        price: 120,
        brand: "https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png"
    }
]

const sneaker = Sneakers[0]

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ShoppingCart() {
    return (
        <Container sx={{ mt: 2 }}>
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 1000,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid
                    container spacing={2}
                    display={'flex'}
                    alignItems={'center'}
                >
                    <Grid item justifyContent='center' display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <ButtonBase sx={{ width: 300, height: 300 }}>
                            <Img alt="complex" src={sneaker.image} />
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
                                <Typography variant="body2" gutterBottom>
                                    Size: {sneaker.size}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                Total: {sneaker.price} €
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container >
    );
}