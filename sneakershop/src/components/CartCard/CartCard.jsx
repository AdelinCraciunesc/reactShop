import { IconButton, Typography } from "@mui/material";
import React from "react";
import "./CartCard.css";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function CartCard({ sneaker }) {
  return (
    <Grid
      container
      gap={1}
    >
      <Grid item>
        <img className="card-img" src={sneaker.image} alt={sneaker.name} />
      </Grid>
      <Grid item style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", width: "150px" }}>
        <Typography marginRight={1}>{sneaker.name}</Typography>
        <Typography>{sneaker.price}€</Typography>
      </Grid>
      <Grid item style={{ display:"flex", flexDirection:"row", justifyContent:"flex-end", alignItems:"center"}}>
        <IconButton size="large" sx={{color:"#FF0000"}}>
          <DeleteForeverIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
