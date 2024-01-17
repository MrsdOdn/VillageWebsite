import React, { useState } from "react";
import { Paper, Typography, Button, MobileStepper, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NewsCarousel = ({ newsList }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % newsList.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? newsList.length - 1 : prevActiveStep - 1
    );
  };
  function isFile(value) {
    return value instanceof File;
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        textAlign: "center",
        margin: 2,
        backgroundColor: "#CDD0CB",
        borderRadius: "15px",
        boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Typography variant="h4" sx={{marginBottom:3,}}>
        <span style={{ fontFamily: "cursive", color: "black" }}>
          {newsList[activeStep].title}
        </span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {newsList[activeStep].image && (
          <img
            src={
              isFile(newsList[activeStep].image)
                ? URL.createObjectURL(newsList[activeStep].image)
                : newsList[activeStep].image
            }
            alt={newsList[activeStep].title}
            style={{
              maxWidth: "50%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "8px",
              marginRight: "10px",
            }}
          />
        )}

        <Typography sx={{ maxWidth: "80%", textAlign: "left", padding:3, }}>
          {newsList[activeStep].content}
          <br />
          <br />
          {newsList[activeStep].addedDate}
        </Typography>
      </Box>

      <MobileStepper
        sx={{
          margin: 2,
          backgroundColor: "#EFF2EC",
          borderRadius: "15px",
          boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.1)",
        }}
        variant="dots"
        steps={newsList.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{ color: "black" }}
            size="small"
            onClick={handleNext}
            disabled={newsList.length <= 1}
          >
            <strong>İleri</strong>
            <ArrowForwardIcon />
          </Button>
        }
        backButton={
          <Button
            sx={{ color: "black" }}
            size="small"
            onClick={handleBack}
            disabled={newsList.length <= 1}
          >
            <ArrowBackIcon />
            <strong>Geri</strong>
          </Button>
        }
      />
    </Paper>
  );
};

export default NewsCarousel;
