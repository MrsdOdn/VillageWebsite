import React from "react";
import {
  Card,
  Box,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const SharedCarCard = ({ sharedCar }) => {
  const handleDelete = () => {
    console.log("Ürün silindi:", sharedCar.id);
  };

  const handleEdit = () => {
    console.log("Ürün düzenleme sayfasına yönlendirme:", sharedCar.id);
  };

  function isFile(value) {
    return value instanceof File;
  }

  return (
    <Card
      sx={{
        marginY: "10px",
        borderRadius: "10px",
        maxWidth: 300,
        boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ background: "blue", width: 56, height: 56 }}>
            {sharedCar.driver.name[0]}
          </Avatar>
        }
        title={`${sharedCar.driver.name} ${sharedCar.driver.surname}`}
        subheader={`Tel: 0${sharedCar.driver.phoneNumber}`}
        action={
          <>
            <IconButton onClick={handleEdit} aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {sharedCar.image && (
            <img
              src={
                isFile(sharedCar.image)
                  ? URL.createObjectURL(sharedCar.image)
                  : sharedCar.image
              }
              alt={sharedCar.subcategory}
              style={{
                maxWidth: "100%",
                maxHeight: "150px",
                height: "auto",
              }}
            />
          )}
        </Box>
        <Typography variant="h6" gutterBottom>
          {/* Add any specific title if needed */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Nerden:</strong> {sharedCar.departure}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Nereye:</strong> {sharedCar.destination}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Fiyat:</strong> ₺{sharedCar.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Seyahat Tarihi:</strong>{" "}
          {new Date(sharedCar.date).toLocaleDateString()} <br />
          <strong>Seyahat Saati:</strong>{" "}
          {new Date(sharedCar.date).toLocaleTimeString()}
        </Typography>
        <Typography variant="body2" color="text.secondary" multilines>
          <strong>Yolcu Sayısı:</strong> {sharedCar.passenger}
        </Typography>
        <Typography variant="body2" color="text.secondary" multilines>
          <strong>Yol Güzergahı:</strong> {sharedCar.route}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ overflow: "hidden" }}
        >
          <strong>Not:</strong> {sharedCar.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SharedCarCard;
