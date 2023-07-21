import {
  Container,
  Grid,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import SneakerCard from "../components/SneakerCard/SneakerCard";

const MenSneakers = [
  {
    name: "Abibas",
    Model: "YeezyV1",
    image: "https://sneakerindustry.ro/100093-product_cover/x-psg-air-200e.jpg",
    size: ["41, 42"],
    price: 120,
    brand: "https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png",
  },
  {
    name: "Nikecss",
    Model: "Voosh",
    image:
      "https://sneakerindustry.ro/102393-product_cover/slipstream-always-on.jpg",
    size: ["40, 42, 45"],
    price: 80,
    brand:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png",
  },
  {
    name: "Nikecss",
    Model: "Voosh",
    image:
      "https://sneakerindustry.ro/102393-product_cover/slipstream-always-on.jpg",
    size: ["40, 42, 45"],
    price: 80,
    brand:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png",
  },
  {
    name: "Nikecss",
    Model: "Voosh",
    image:
      "https://sneakerindustry.ro/102393-product_cover/slipstream-always-on.jpg",
    size: ["40, 42, 45"],
    price: 80,
    brand:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/200px-Jumpman_logo.svg.png",
  },
];

export default function MenProducts() {
  const [sortSneakers, setSortSneakers] = React.useState("relevant");

  function handleSelect(event){
    // should sort the items either on the backend or in the frontend
    setSortSneakers(event.target.value);
    console.log("hello");
  }

  return (
    <Container sx={{ textAlign: "center" }}>
      <h1>Men Products</h1>
      <Container sx={{ display: "flex", textAlign: "center",flexDirection: "row", justifyContent: "center" }}>
        
        <Button>Filter</Button>
        <FormControl>
          <Select
            id="select-id"
            value={sortSneakers}
            onChange={handleSelect}
          >
            <MenuItem value={"relevant"} selected>Most popular</MenuItem>
            <MenuItem value={"new"}>Newest</MenuItem>
            <MenuItem value={"ascending"}>Price Ascending</MenuItem>
            <MenuItem value={"descending"}>Price Descending</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {/* Add a new card component for the category pages */}
        {MenSneakers.map((sneaker) => (
          <Grid item>
            <SneakerCard sneaker={sneaker} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
