import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import SharedCarCard from "../../components/SharedCarCard";

const sampleData = [
  {
    id: 1,
    driver: {
      name: "Ahmet",
      surname: "Kurşun",
      phoneNumber: "5555555555",
    },
    image: "/image/sharedCar.jpeg",
    description: "Örnek Açıklama 1",
    departure: "İstanbul",
    destination: "Ankara",
    route: "Örnek Güzergah 1",
    price: 250,
    date: new Date(2024, 1, 15, 10, 0),
    addedDate: "2024-01-12 12:00",
    passenger: 3,
  },
  {
    id: 2,
    driver: {
      name: "Emine",
      surname: "Üzgü",
      phoneNumber: "5555555555",
    },
    image: "/image/sharedCar.jpeg",
    description: "Örnek Açıklama 1",
    departure: "Adana",
    destination: "Kayseri",
    route: "Örnek Güzergah 2",
    price: 150,
    date: new Date(2024, 1, 15, 10, 0),
    addedDate: "2024-01-12 12:00",
    passenger: 3,
  },
];

export default function SharedCars() {
  const [sharedCars, setSharedCars] = useState(sampleData);

  const location = useLocation();
  const { sharedCar } = location.state || {};
  console.log("Yönlendirilen Araç Seferi:", sharedCar);

  useEffect(() => {
    if (sharedCar) {
      addSharedCar(sharedCar);
    }
  }, [sharedCar]);

  const addSharedCar = (newSharedCar) => {
    const updatedSharedCars = {
      ...newSharedCar,
      id: sharedCars.length > 0 ? sharedCars[sharedCars.length - 1].id + 1 : 1,
    };
    setSharedCars((prevSharedCars) => [...prevSharedCars, updatedSharedCars]);
  };

  const filterUniqueSharedCarsById = (sharedCars) => {
    const uniqueSharedCars = [];
    const seenIds = new Set();

    sharedCars.forEach((sharedCar) => {
      if (!seenIds.has(sharedCar.id)) {
        uniqueSharedCars.push(sharedCar);
        seenIds.add(sharedCar.id);
      }
    });

    return uniqueSharedCars;
  };

  const boxStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    margin: 2,
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        width: "100%",
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            maxWidth: "34rem",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
            padding: 1,
            margin: 2,
            textAlign: "center",
          }}
        >
          <span style={{ fontFamily: "cursive", color: "black" }}>
          Araç Paylaş, Yakıttan Kazan.
          </span>
        </Typography>

        <Box sx={boxStyles}>
          {filterUniqueSharedCarsById(sharedCars).map((uniqueSharedCar) => (
            <SharedCarCard
              key={uniqueSharedCar.id}
              sharedCar={uniqueSharedCar}
            />
          ))}
        </Box>
      </Grid>
    </Box>
  );
}
