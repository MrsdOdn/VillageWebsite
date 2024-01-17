import React from "react";
import { ButtonBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Routes from "../utils/Routes";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius:"15px",
});

// Resim yollarını sabit bir klasöre taşıma
const categories = [
  {
    path: Routes.suturunleri,
    imageSrc: "image/sutUrunleri.jpeg",
    altText: "sut_urunleri",
    title: "Süt Ürünleri",
  },
  {
    path: Routes.meyvesebze,
    imageSrc: "image/meyveSebze.jpeg",
    altText: "meyve_sebze",
    title: "Meyve Sebzeler",
  },
  {
    path: Routes.hayvanlar,
    imageSrc: "image/hayvanTicareti.jpeg",
    altText: "hayvan_ticareti",
    title: "Hayvan Satış",
  },
  {
    path: Routes.insaatmalzemeleri,
    imageSrc: "image/insaatMalzemeleri.jpeg",
    altText: "inşaat_malzemeleri",
    title: "Hırdavat",
  },
  {
    path: Routes.baklagiller,
    imageSrc: "image/baklagiller.jpeg",
    altText: "baklagil çeşitleri",
    title: "Baklagiil Çeşitleri",
  },
  {
    path: Routes.elisleri,
    imageSrc: "image/elisleri.jpeg",
    altText: "elisleri",
    title: "El İşleri",
  },
  {
    path: Routes.mobilyalar,
    imageSrc: "image/mobilyaUrunleri.jpeg",
    altText: "mobilya_ürünleri",
    title: "Mobilya Bölümü",
  },
  {
    path: Routes.baharatlar,
    imageSrc: "image/baharatlar.jpeg",
    altText: "baharat_türleri",
    title: "Baharatlar",
  },
  {
    path: Routes.ikinciel,
    imageSrc: "image/secondSales.jpeg",
    altText: "second_sales",
    title: "İkinci El Satış",
  },
  // { path: Routes.home, imageSrc: "image/anotherCategory.jpg", altText: "Another Category" },
];

const CategoryButton = ({ path, imageSrc, altText, title }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  // ButtonBase üzerindeki stilleri ayrı bir obje olarak tanımlama
  const buttonBaseStyles = {
    width: 120,
    height: 150,
    margin: 2,
    borderRadius:"15px",
    "&:hover": {
      boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <ButtonBase
      onClick={handleNavigate}
      sx={buttonBaseStyles}
    >
      <div>
        <Img
          src={imageSrc}
          alt={altText}
          sx={{ minHeight: 80, minWidth: 80 }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 1,
            color: "black",
          }}
        >
          {title}
        </Typography>
      </div>
    </ButtonBase>
  );
};

export default function BazaarCategory() {
  return (
    <div>
      {categories.map((category, index) => (
        <CategoryButton key={index} {...category} />
      ))}
    </div>
  );
}