import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./HotSneakers.css";
import SneakerCard from "../SneakerCard/SneakerCard";

export default function HotSneakers({ sneakers, cartItems, setCartItems }) {

  function addToCart() {
    setCartItems(cartItems + 1);
  }
  ///////////////// FA COMPONENTA CARD BAAAAAAAAAAAAAAAAAAA ////////////////////////
  return (
    <div className="hotsneakers-div">
      <h1>Hot sneakers on sale!</h1>
      <Box
        sx={{ flexGrow: 1, display: "flex", justifyContent: "center", mt: 3, p: 1 }}
      >

        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {sneakers.map((sneaker, index) => (
            <Grid display="flex" justifyContent="center" alignItems="center" xs={2} sm={4} md={3} key={index}>
              <SneakerCard sneaker={sneaker} addToCart={addToCart} cartItems={cartItems}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
