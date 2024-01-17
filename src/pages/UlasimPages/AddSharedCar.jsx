import React, { useState } from "react";
import {
  Button,
  TextField,
  InputLabel,
  FormControl,
  Grid,
  Typography,
  Box,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import SharedCarCard from "../../components/SharedCarCard";
import ImagesUpload from "../../components/ImagesUpload ";
import { useNavigate } from "react-router-dom";
import DTPicker from "../../components/DTPicker";
import Routes from "../../utils/Routes";

const AddSharedCar = () => {
  const navigate = useNavigate();
  const [sharedCars, setSharedCars] = useState([]);
  const [sharedCar, setSharedCar] = useState({
    driver: {
      name: "",
      surname: "",
      phoneNumber: "",
    },
    image: null,
    description: "",
    departure: "",
    destination: "",
    route: "",
    price: "",
    date: null,
    addedDate: "",
    passenger: "",
  });
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const isValidPhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

  const handleImageUpload = (file) => {
    setSharedCar({
      ...sharedCar,
      image: file,
    });
  };

  const handleInputChange = (field, value) => {
    if (field === "driver.phoneNumber") {
      const isValid = isValidPhoneNumber(value);
      setPhoneNumberError(
        isValid ? null : "Geçerli bir telefon numarası giriniz."
      );
    }

    if (field.startsWith("driver.")) {
      const driverField = field.split(".")[1];
      setSharedCar((prev) => ({
        ...prev,
        driver: {
          ...prev.driver,
          [driverField]: value,
        },
      }));
    } else {
      setSharedCar((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return currentDateTime.toLocaleString(undefined, options);
  };

  const handleAddSharedCar = () => {
    const addedDateTime = getCurrentDateTime();
    setSharedCar((prev) => ({
      ...prev,
      addedDate: addedDateTime,
    }));

    for (const field in sharedCar.driver) {
      if (field === "phoneNumber" && phoneNumberError) {
        return;
      }

      if (!sharedCar.driver[field]) {
        alert(`Lütfen ${field} alanını doldurun.`);
        return;
      }
    }

    const newSharedCar = {
      ...sharedCar,
      id: sharedCars.length + 1,
    };

    setSharedCars((prevCars) => [...prevCars, newSharedCar]);
    console.log("Araç Seferi Eklendi:", newSharedCar);

    setSharedCar({
      driver: {
        name: "",
        surname: "",
        phoneNumber: "",
      },
      image: null,
      description: "",
      departure: "",
      destination: "",
      route: "",
      price: "",
      date: null,
      addedDate: "",
      passenger: "",
    });

    navigate(Routes.paylasimliaraba, { state: { sharedCar: newSharedCar } });
  };

  const handleDateChange = (newDate) => {
    setSharedCar((prev) => ({
      ...prev,
      date: newDate,
    }));
  };
  const buttonStyle = {
    marginY: "30px",
    borderRadius: "10px",
    fontSize: "1.2rem",
    padding: "15px 30px",
    boxShadow: "0 0 10px 5px rgba(76, 175, 80, 0.2)",
    "&:hover": {
      boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Box
      sx={{
        marginTop: 3,
        marginX: 5,
        backgroundColor: "#B6D7DE",
        padding: 2,
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ color: "#11235A" }}>
            Araba Seferi Ekle
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              label="Şöför Adı"
              value={sharedCar.driver.name}
              onChange={(e) => handleInputChange("driver.name", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              label="Şöför Soyadı"
              value={sharedCar.driver.surname}
              onChange={(e) =>
                handleInputChange("driver.surname", e.target.value)
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-number">
              Telefon Numarası
            </InputLabel>
            <OutlinedInput
              id="filled-adornment-number"
              startAdornment={
                <InputAdornment position="start">+90</InputAdornment>
              }
              label="Satıcı Telefon Numarası"
              value={sharedCar.driver.phoneNumber}
              onChange={(e) =>
                handleInputChange("driver.phoneNumber", e.target.value)
              }
              error={!!phoneNumberError}
              helperText={phoneNumberError}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              label="Nereden"
              value={sharedCar.departure}
              onChange={(e) => handleInputChange("departure", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              label="Nereye"
              value={sharedCar.destination}
              onChange={(e) => handleInputChange("destination", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Plaka görünecek şekilde arabanın resmini yükleyin."
            disabled
            marginRight="10px"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="contained" sx={{ width: "auto", height: "100%" }}>
            <ImagesUpload onImageUpload={handleImageUpload} />
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            type="number"
            label="Yolcu Sayısı"
            variant="outlined"
            fullWidth
            value={sharedCar.passenger}
            onChange={(e) => handleInputChange("passenger", e.target.value)}
            inputProps={{ min: 1, max: 15 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Fiyat</InputLabel>
            <OutlinedInput
              id="filled-adornment-amount"
              startAdornment={
                <InputAdornment position="start">₺</InputAdornment>
              }
              label="Fiyat"
              value={sharedCar.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <DTPicker onDateChange={handleDateChange} />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Gideceğiniz güzergahı kısaca belirtiniz."
              fullWidth
              value={sharedCar.route}
              onChange={(e) => handleInputChange("route", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Not..."
            fullWidth
            value={sharedCar.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            variant="contained"
            onClick={handleAddSharedCar}
            sx={buttonStyle}
          >
            Ekle
            <AddSharpIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>
      <SharedCarCard sharedCar={sharedCar} />
    </Box>
  );
};

export default AddSharedCar;
