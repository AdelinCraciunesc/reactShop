import { Button, Typography } from "@mui/material";
import React from "react";
import "./CartCard.css";
import Grid from "@mui/material/Grid";

export default function CartCard({ sneaker }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <img className="card-img" src={sneaker.image} alt={sneaker.name} />
      </Grid>
      <div>
        <Grid item>
          <Typography>{sneaker.name}</Typography>
        </Grid>
        <Grid item>
          <Typography>{sneaker.price}€</Typography>
        </Grid>
      </div>
      <Grid item>
        <Button>remove</Button>
      </Grid>
    </Grid>
  );
}
