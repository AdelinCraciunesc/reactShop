import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./HotSneakers.css";
import Badge from '@mui/material/Badge';

export default function HotSneakers({ sneakers }) {
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
                  badgeContent="Reduced"
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
