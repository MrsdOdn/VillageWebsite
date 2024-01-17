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
import MinibusCard from "../../components/MinibusCard";
import ImagesUpload from "../../components/ImagesUpload ";
import { useNavigate } from "react-router-dom";
import DTPicker from "../../components/DTPicker";
import Routes from "../../utils/Routes";

const AddMinibus = () => {
  const navigate = useNavigate();
  const [minibuses, setMinibuses] = useState([]);
  const [minibus, setMinibus] = useState({
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
  });
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const isValidPhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

  const handleImageUpload = (file) => {
    setMinibus({
      ...minibus,
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
      setMinibus((prev) => ({
        ...prev,
        driver: {
          ...prev.driver,
          [driverField]: value,
        },
      }));
    } else {
      setMinibus((prev) => ({
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

  const handleAddMinibus = () => {
    const addedDateTime = getCurrentDateTime();
    setMinibus((prev) => ({
      ...prev,
      addedDate: addedDateTime,
    }));

    for (const field in minibus.driver) {
      if (field === "phoneNumber" && phoneNumberError) {
        return;
      }

      if (!minibus.driver[field]) {
        alert(`Lütfen ${field} alanını doldurun.`);
        return;
      }
    }

    const newMinibus = {
      ...minibus,
      id: minibuses.length + 1,
    };

    setMinibuses((prevCars) => [...prevCars, newMinibus]);
    console.log("Araç Seferi Eklendi:", newMinibus);

    setMinibus({
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
    });

    navigate(Routes.minibus, { state: { minibus: newMinibus } });
  };

  const handleDateChange = (newDate) => {
    setMinibus((prev) => ({
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
            Minibüs Seferi Ekle
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              label="Şöför Adı"
              value={minibus.driver.name}
              onChange={(e) => handleInputChange("driver.name", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              label="Şöför Soyadı"
              value={minibus.driver.surname}
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
              value={minibus.driver.phoneNumber}
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
              value={minibus.departure}
              onChange={(e) => handleInputChange("departure", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <TextField
              label="Nereye"
              value={minibus.destination}
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
        <Grid item xs={12} md={6}>
          <Button variant="contained" sx={{ width: "auto", height: "100%" }}>
            <ImagesUpload onImageUpload={handleImageUpload} />
          </Button>
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
              value={minibus.price}
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
              value={minibus.route}
              onChange={(e) => handleInputChange("route", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Not..."
            fullWidth
            value={minibus.description}
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
            onClick={handleAddMinibus}
            sx={buttonStyle}
          >
            Ekle
            <AddSharpIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>
      <MinibusCard minibus={minibus} />
    </Box>
  );
};

export default AddMinibus;
