import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HotSneakers({ sneakers }) {
  return (
    <Box className="hotsneakers-div" sx={{ flexGrow: 1, mt: 5, p: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {sneakers.map((sneaker, index) => (
          <Grid display="flex" justifyContent="center" alignItems="center" xs={2} sm={4} md={3} key={index}>
            <Card sx={{ maxWidth: 445, width: 445 }}>
              <CardHeader
                avatar={
                  <Avatar
                    src={sneaker.brand}
                    sx={{height: 56, width:56}}
                    variant="square"
                  >
                  </Avatar>
                }
                title="Abibas"
              />
              <CardMedia
                component="img"
                image={sneaker.image}
                alt="sneaker"
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  YEEZY
                </Typography>
                <Typography sx={{ mt: 2 }} variant="body1" color="text">
                  Sizes: 40, 41, 42
                </Typography>
                <Typography sx={{ mt: 2 }} variant="body1" color="text">
                  150€
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
