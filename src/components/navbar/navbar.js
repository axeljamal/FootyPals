import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import logo from "../../../src/assets/footypals-logo.svg";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { label: "PL Table", path: "/table" },
  { label: "Fixtures", path: "/fixture" },
];

const buttonStyles = {
  px: "1rem",
  mr: "10px",
  textDecoration: "none",
  fontSize: "1.01rem",
  textTransform: "none",
  color: "#FAFAFA",
  borderRadius: "10px",
  border: "2px solid #2b2d42",
  background: "#467336",
  boxShadow: "3px 3px #2b2d42",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    background: "#ffc300",
    color: "#252525",
    transition: "transform 0.2s ease-in-out",
  },
  "&:active": {
    boxShadow: "none",
    transform: "translate(3px, 3px)",
    transition: "transform 0.2s ease-in-out",
  },
};

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // ------------------ drawer = sidebar ----------------- //
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontSize: "1.4rem", fontWeight: "600", color: "#467336" }}
      >
        FootyPals
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: { fontWeight: "500", textAlign: "center" },
                  }}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* ----------- Footy Pals Logo below ----------- */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "left" },
                flexGrow: 1,
                textAlign: { xs: "center", sm: "left" },
                my: 2,
              }}
            >
              <img src={logo} alt="Footy-Pals-Logo" height="auto" width="50" />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 18,
                  ml: 2,
                  // color: "#467336",
                  textDecoration: "none",
                }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#467336" }}
                >
                  Footy Pals
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link to="/table" style={{ textDecoration: "none" }}>
                <Button sx={buttonStyles}>PL Table</Button>
              </Link>
              <Link to="/fixture" style={{ textDecoration: "none" }}>
                <Button sx={buttonStyles}>Fixtures</Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
