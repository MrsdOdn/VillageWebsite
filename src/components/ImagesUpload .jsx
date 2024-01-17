import React, { useState } from "react";

const ImagesUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    onImageUpload(file);
  };

  return (
    <div>
     
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="image-upload-input"
        type="file"
        onChange={handleImageChange}
      />
      <label htmlFor="image-upload-input" >
        <div style={{ cursor: "pointer", textAlign: "center" }}>
        <p>Fotoğraf Seç</p>
        </div>
      </label>
    </div>
  );
};

export default ImagesUpload;
