import * as React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ShoppingCart } from "@mui/icons-material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Badge from "@mui/material/Badge";
import CartCard from "../CartCard/CartCard";
import { Link, useHistory, useLocation } from "react-router-dom";

function Navbar({ firstThreeSneakers , cartItems, setCartItems }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //use location to disable cart button on /cart page
  const location = useLocation();


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      style={{
        backgroundColor: "#302f35",
      }}
      position="static"
    >
      <Container maxWidth="x2">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HeroSneakers
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  sx={{
                    fontFamily: "Inter",
                  }}
                >
                  About Us
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  sx={{ display: "flex", fontFamily: "Inter" }}
                >
                  Hot Deals
                  <LocalOfferIcon />
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Hero Sneakers
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Inter",
              }}
            >
              About Us
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                fontFamily: "Inter",
              }}
            >
              Hot Deals
              <LocalOfferIcon />
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }} className="menu-icon">
            {location.pathname !== "/cart" && (
              <div>
                <Badge
                  badgeContent={cartItems > 0 ? cartItems : null}
                  color="primary"
                  className="cart-icon"
                >
                  <IconButton>
                    <Link to="/cart">
                      <ShoppingCart style={{ color: "white" }} />
                    </Link>
                  </IconButton>
                </Badge>
                <div class="menu-list">
                  <nav id="menu-nav">
                    {firstThreeSneakers.map((sneaker, index) => (
                        <CartCard key={sneaker.id} sneaker={sneaker} />
                    ))}
                  </nav>
                </div>
              </div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
