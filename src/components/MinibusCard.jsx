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

const MinibusCard = ({ minibus }) => {
  const handleDelete = () => {
    console.log("Ürün silindi:", minibus.id);
  };

  const handleEdit = () => {
    console.log("Ürün düzenleme sayfasına yönlendirme:", minibus.id);
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
            {minibus.driver.name[0]}
          </Avatar>
        }
        title={`${minibus.driver.name} ${minibus.driver.surname}`}
        subheader={`Tel: 0${minibus.driver.phoneNumber}`}
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
          {minibus.image && (
            <img
              src={
                isFile(minibus.image)
                  ? URL.createObjectURL(minibus.image)
                  : minibus.image
              }
              alt={minibus.subcategory}
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
          <strong>Nerden:</strong> {minibus.departure}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Nereye:</strong> {minibus.destination}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Fiyat:</strong> ₺{minibus.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Seyahat Tarihi:</strong>{" "}
          {new Date(minibus.date).toLocaleDateString()} <br />
          <strong>Seyahat Saati:</strong>{" "}
          {new Date(minibus.date).toLocaleTimeString()}
        </Typography>

        <Typography variant="body2" color="text.secondary" multilines>
          <strong>Yol Güzergahı:</strong> {minibus.route}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ overflow: "hidden" }}
        >
          <strong>Not:</strong> {minibus.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MinibusCard;
