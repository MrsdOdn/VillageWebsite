import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import ImagesUpload from "../../components/ImagesUpload ";
import Routes from "../../utils/Routes";
import { useNavigate } from "react-router-dom";

const AddNews = () => {
  const [newsData, setNewsData] = useState({
    category: "",
    title: "",
    content: "",
    image: null,
    addedDate: "",
  });
  const navigate = useNavigate();

  const handleImageUpload = (file) => {
    setNewsData({
      ...newsData,
      image: file,
    });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini istediğiniz şekilde kullanabilirsiniz.
    console.log("News Data:", newsData);
    // İsterseniz bu verileri bir API'ye gönderebilirsiniz.
  };

  const handleInputChange = (field, value) => {
    setNewsData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleAddNewsData = () => {
    const addedDateTime = getCurrentDateTime();
    setNewsData((prev) => ({
      ...prev,
      addedDate: addedDateTime,
    }));
    for (const field in newsData) {
      if (!newsData[field] && field !== "addedDate") {
        alert(`Lütfen ${field} alanını doldurun.`);
        return;
      }
    }

    const newNewsData = {
      ...newsData,
    };
    if (!newNewsData.addedDate) {
      newNewsData.addedDate = addedDateTime;
    }

    setNewsData({
      category: "",
      title: "",
      content: "",
      image: null,
      addedDate: "",
    });
    navigate(Routes.home, { state: { newsData: newNewsData } });
  };

  const buttonStyle = {
    backgroundColor: "#5D5E5C",
    marginY: "30px",
    borderRadius: "10px",
    fontSize: "1.2rem",
    padding: "15px 30px",
    boxShadow: "0 0 10px 5px rgba(76, 175, 80, 0.2)",
    "&:hover": {
      backgroundColor: "#CDD0CB",
      boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Box
      sx={{
        boxShadow: "10px 10px 20px 20px rgba(0, 0.2, 0, 0.2)",
        marginX: 5,
        padding: 2,
        gap: 3,
        minHeight: "100vh", // Ekran yüksekliği kadar büyüyen bir konteyner
        flexDirection: "column",
        backgroundColor: "#CDD0CB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <img
        src={
          newsData.image
            ? URL.createObjectURL(newsData.image)
            : "/image/newsboyy.jpeg"
        }
        alt="Haber Resmi"
        style={{
          maxWidth: "70%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          color: "#CDD0CB",
        }}
      />
      <Paper
        elevation={3}
        sx={{ p: 3, maxWidth: "400px", backgroundColor: "#EFF2EC" }}
      >
        <Typography variant="h5" gutterBottom>
          Haber Ekle
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="category-label">Kategori</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={newsData.category}
              label="Kategori"
              onChange={(e) => handleInputChange("category", e.target.value)}
            >
              <MenuItem value="diğer">Diğer</MenuItem>
              <MenuItem value="acildurum">Acil Durum</MenuItem>
              <MenuItem value="haber">Haber</MenuItem>
              <MenuItem value="düğün">Düğün Daveti</MenuItem>
              <MenuItem value="nişan">Nişan Daveti</MenuItem>
              <MenuItem value="vefat">Vefat Haberi</MenuItem>
              <MenuItem value="okulduyuru">Okul Duyurusu</MenuItem>
              <MenuItem value="muhtarlıkduyuru">Muhtarlık Duyurusu</MenuItem>
              <MenuItem value="sağlık">Doktor Duyurusu</MenuItem>
              <MenuItem value="yardım">Yardım Destek</MenuItem>
              <MenuItem value="hikaye">Hikaye</MenuItem>
              <MenuItem value="köşeyazısı">Köşe Yazısı</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Başlık"
            variant="outlined"
            margin="normal"
            value={newsData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
          <Button
            value={newsData.image}
            variant="contained"
            sx={{
              width: "auto",
              height: "100%",
              backgroundColor: "#5D5E5C",
              "&:hover": {
                backgroundColor: "#CDD0CB",
                boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <ImagesUpload onImageUpload={handleImageUpload} />
          </Button>

          <TextField
            disabled
            fullWidth
            label="Fotoğraf Ekle"
            variant="outlined"
            margin="normal"
            value={newsData.image ? newsData.image.name : ""}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="İçerik"
            variant="outlined"
            margin="normal"
            value={newsData.content}
            onChange={(e) => handleInputChange("content", e.target.value)}
          />

          <Button
            onClick={handleAddNewsData}
            type="submit"
            variant="contained"
            color="primary"
            sx={buttonStyle}
          >
            Haberi Ekle
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddNews;
