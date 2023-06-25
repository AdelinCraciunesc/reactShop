import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Badge from '@mui/material/Badge';
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function SneakerCard({sneaker, addToCart, cartItems, setCartItems}) {
  return (
    <Card sx={{ maxWidth: 350, width: 450 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ height: 56, width: 56 }} variant="rounded">
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
        <Button
          sx={{
            mt: 2,
            ":hover": {
              bgcolor: "#9ec3ff",
              color: "white",
            },
          }}
          variant="text"
          color="primary"
          aria-label="add to shopping cart"
          size="small"
          onClick={addToCart}
        >
          <Typography fontSize={"1rem"} fontFamily="Nunito" mr={1}>
            Add to cart
          </Typography>
          <AddShoppingCartIcon />
        </Button>
      </CardContent>
    </Card>
  );
}
