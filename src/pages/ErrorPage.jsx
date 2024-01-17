import React from "react";
import { Container, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(/image/errorPage.jpeg)`, // Arkaplan fotoğrafı
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center", mt: 15 }}>
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            backgroundColor: "#f0ebce",
            borderRadius: "10px",
            color: "#AA8B56",
            boxShadow: "0 0 10px 5px rgba(0, 0, 80, 0.2)",
          }}
        >
          Oops! Sayfa bulunamadı.
        </Typography>
        <Button
          variant="contained"
          onClick={goBack}
          sx={{
            borderRadius: "10px",
            backgroundColor: "#AA8B56",
          }}
        >
          Geri Git
        </Button>
      </Container>
    </Paper>
  );
};

export default NotFound;
