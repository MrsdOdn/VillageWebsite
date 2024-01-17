import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";

const BazaarProductCard = ({ product }) => {
  const handleDelete = () => {
    console.log("Ürün silindi:", product.id);
  };

  const handleEdit = () => {
    console.log("Ürün düzenleme sayfasına yönlendirme:", product.id);
  };
  function isFile(value) {
    return value instanceof File;
  }

  return (
    <Card
      sx={{
        marginY: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "green", width: 56, height: 56 }}>
            {product.seller.name[0]}
          </Avatar>
        }
        title={`${product.seller.name} ${product.seller.surname}`}
        subheader={`Tel: ${product.seller.number}`}
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
          {product.image && (
            <img
              src={
                isFile(product.image)
                  ? URL.createObjectURL(product.image)
                  : product.image
              }
              alt={product.subcategory}
              style={{
                maxWidth: "100%",
                maxHeight: "150px",
                height: "auto",
              }}
            />
          )}
        </Box>

        <Typography variant="h6" gutterBottom>
          <strong>Kategori:</strong> {product.subcategory}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Fiyat:</strong> ₺{product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>1</strong> {product.unit}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Teslimat:</strong> {product.shippingType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Not:</strong> {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Eklendi:</strong>{" "}
          {product.addedDate ? product.addedDate : "Not available"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BazaarProductCard;
