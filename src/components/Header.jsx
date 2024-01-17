import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  ButtonBase,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  Newspaper as NewspaperIcon,
  Storefront as StorefrontIcon,
  DirectionsBus as DirectionsBusIcon,
  Store as StoreIcon,
  Collections as CollectionsIcon,
  Feed as FeedIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Routes from "../utils/Routes";
import NavBarSearch from "./NavBarSearch";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const buttonData = [
  {
    label: "Haberler",
    icon: <NewspaperIcon sx={{ marginLeft: 1 }} />,
    path: "/",
  },
  {
    label: "Yerel_Pazar",
    icon: <StorefrontIcon sx={{ marginLeft: 1 }} />,
    path: "/yerelpazar",
  },
  {
    label: "Ulaşım",
    icon: <DirectionsBusIcon sx={{ marginLeft: 1 }} />,
    path: "/ulasim",
  },
  {
    label: "İşletmeler",
    icon: <StoreIcon sx={{ marginLeft: 1 }} />,
    path: "/isletmeler",
  },
  {
    label: "Tanıtım",
    icon: <FeedIcon sx={{ marginLeft: 1 }} />,
    path: "/tanitim",
  },
  {
    label: "Galeri",
    icon: <CollectionsIcon sx={{ marginLeft: 1 }} />,
    path: "/galeri",
  },
];

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static" id="appBar" sx={{ backgroundColor: "#f0ebce" }}>
      <Toolbar className="toolbar">
        <ButtonBase
          onClick={() => handleNavigate(Routes.home)}
          sx={{ width: 100, height: 100 }}
        >
          <Img
            src="image/logo.png"
            alt="logo_image"
            sx={{ minHeight: 80, minWidth: 80 }}
          />
        </ButtonBase>
        <NavBarSearch />
        <Stack spacing={1} variant="inherit">
          <Button
            sx={{
              backgroundColor: "#AA8B56",
              color: "white",
              borderRadius: "10px",
            }}
            endIcon={<LoginIcon sx={{ marginLeft: 1 }} />}
            onClick={() => handleNavigate("/signup")}
          >
            Üye Ol
          </Button>
          <Button
            sx={{
              backgroundColor: "#AA8B56",
              color: "white",
              borderRadius: "10px",
            }}
            endIcon={<LoginIcon sx={{ marginLeft: 1 }} />}
            onClick={() => handleNavigate("/loginpage")}
          >
            Giriş Yap
          </Button>
        </Stack>
      </Toolbar>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {buttonData.map(({ label, icon, path }, index) => (
          <Grid key={index} item xs={12} sm={6} md={2}>
            <Button
              fullWidth
              sx={{
                backgroundColor: path === currentPath ? "#E6C792" : "#AA8B56",
                color: path === currentPath ? "black" : "white",
                borderRadius: "5px",
              }}
              endIcon={icon}
              onClick={() => handleNavigate(path)}
            >
              {label}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Grid container sx={{ display: { md: "none" } }}>
        <Grid item xs={12} marginTop={1}>
          <Button
            onClick={handleMenuToggle}
            sx={{
              backgroundColor: "#AA8B56",
              color: "white",
              borderRadius: "0px",
              width: "100%",
              "&:hover": {
                backgroundColor: "#8F7238",
              },
            }}
          >
            <MenuIcon sx={{ marginRight: 1 }} />
            Kategoriler
          </Button>
        </Grid>
        {menuOpen &&
          buttonData.map(({ label, path }, index) => (
            <Grid key={index} item xs={12}>
              <Button
                fullWidth
                sx={{
                  backgroundColor: "#AA8B56",
                  color: "white",
                  borderRadius: "0px",
                  "&:hover": {
                    backgroundColor: "#8F7238",
                  },
                }}
                onClick={() => handleNavigate(path)}
              >
                {label}
              </Button>
            </Grid>
          ))}
      </Grid>
    </AppBar>
  );
}

export default Header;
