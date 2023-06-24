import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Badge from '@mui/material/Badge';
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

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

export default function ShoppingCart() {
    return (
        <Container sx={{ mt: 2 }}>
            <TableContainer sx={{ mr: 5 }} component={Paper}>
                <Table sx={{ minWidth: 150 }} aria-label="sneaker-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sneaker</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Size</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Sneakers.map((sneaker, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Card sx={{ maxWidth: 350, width: 450 }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    sx={{ height: 56, width: 56 }}
                                                    variant="rounded"
                                                >
                                                    {sneaker.name[0]}
                                                </Avatar>
                                            }
                                            title={sneaker.name}
                                        />
                                        <CardMedia
                                            component="img"
                                            image={sneaker.image}
                                            alt="sneaker"
                                            height={250}
                                            minHeight={150}
                                        />
                                        <Badge
                                            className="badge"
                                            badgeContent="Sale"
                                            color="error"
                                            style={{ fontSize: "3rem" }}
                                        />
                                        <CardContent>
                                            <Typography
                                                fontSize={"1.5rem"}
                                                fontWeight="bold"
                                                fontFamily="Nunito"
                                                color="#59616e"
                                            >
                                                {sneaker.Model}
                                            </Typography>
                                            <Typography
                                                sx={{ mt: 2 }}
                                                color="text"
                                                fontWeight="bold"
                                                fontFamily="Inter"
                                            >
                                                Sizes: {sneaker.size}
                                            </Typography>
                                            <Typography
                                                sx={{ mt: 2 }}
                                                color="text"
                                                fontSize={"1rem"}
                                                fontFamily="Nunito"
                                            >
                                                {sneaker.price} €
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </TableCell>
                                <TableCell align="right">{sneaker.name}
                                </TableCell>
                                <TableCell align="right">{sneaker.Model}</TableCell>
                                <TableCell align="right">{sneaker.size}</TableCell>
                                <TableCell align="right">{sneaker.price}€</TableCell>
                            </TableRow>
                        )
                        )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}