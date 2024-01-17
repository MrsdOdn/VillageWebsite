import React from "react";
import {
  Sheet,
  ListSubheader,
  ListItem,
  ListItemButton,
  List,
  Box,
  IconButton,
} from "@mui/joy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Divider from "@mui/joy/Divider";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate} from "react-router-dom";
import Routes from "../utils/Routes";

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigateAbout = () => {
    navigate(Routes.about);
  };
  const handleNavigateHome = () => {
    navigate(Routes.home);
  };
  const handleNavigateKullanimKosullari = () => {
    navigate(Routes.kullanimKosullari);
  };

  return (
    <footer className="footer">
      <Sheet
        sx={{
          backgroundColor: "#f0ebce",
          flexGrow: 1,
          p: 2,
          borderRadius: { xs: 0, sm: "sm" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-around",
            flexWrap: "wrap", //satıra sığmıyorsa, bir sonraki satıra geçerler.
            gap: 2,
          }}
        >
          <List
            size="sm"
            orientation="horizontal"
            wrap
            sx={{
              flexGrow: 0,
              "--ListItem-radius": "8px",
              "--ListItem-gap": "0px",
            }}
          >
            <ListItem nested>
              <ListSubheader sx={{ fontWeight: "xl" }}>
                İletişim Bilgileri
              </ListSubheader>
              <List>
                <ListItem>Çeralan Köyü</ListItem>
                <ListItem>
                  <LocationOnIcon />
                  Çeralan Mah 01740 Saimbeyli/Adana
                </ListItem>
                <ListItem>
                  <PhoneIcon />
                  phoneNumber
                </ListItem>
                <ListItem>
                  <EmailIcon />
                  mail
                </ListItem>
              </List>
            </ListItem>
          </List>
          <List
            size="sm"
            orientation="horizontal"
            wrap
            sx={{
              flexGrow: 0,
              "--ListItem-radius": "8px",
              "--ListItem-gap": "0px",
            }}
          >
            <ListItem nested >
              <ListSubheader sx={{ fontWeight: "xl" }}>Sayfalar</ListSubheader>
              <List>
                <ListItem>
                  <ListItemButton onClick={handleNavigateHome}><HomeIcon/>Ana Sayfa</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={handleNavigateAbout}><InfoIcon/>Hakkımızda</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton onClick={handleNavigateKullanimKosullari}><DescriptionIcon/>Kullanım Koşulları</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component="a" href="https://mrsdodn.github.io/PersonelSite/"><PersonIcon/>Portfolyo</ListItemButton>
                </ListItem>
              </List>
            </ListItem>
          </List>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton variant="plain">
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton variant="plain">
              <InstagramIcon />
            </IconButton>
            <IconButton variant="plain">
              <TwitterIcon />
            </IconButton> 
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography>Copyright © {year} Tüm hakları saklıdır</Typography>
        </Box>
      </Sheet>
    </footer>
  );
}
