import React from "react";
import { Box, Button, ButtonBase, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Routes from "../utils/Routes";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "15px",
});

const CategoryButton = ({ path, imageSrc, altText, title }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  const buttonBaseStyles = {
    width: 200,
    height: 230,
    margin: 3,
    borderRadius: "15px",
    "&:hover": {
      boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <ButtonBase onClick={handleNavigate} sx={buttonBaseStyles}>
      <div>
        <Img
          src={imageSrc}
          alt={altText}
          sx={{ minHeight: 100, minWidth: 100 }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 2,
            color: "black",
          }}
        >
          {title}
        </Typography>
      </div>
    </ButtonBase>
  );
};

export default function UlasimCategory() {
  const navigate = useNavigate();

  const categories = [
    {
      path: Routes.minibus,
      imageSrc: "image/minibus.jpeg",
      altText: "minibus_seferleri",
      title: "Minibus Seferleri",
    },
    {
      path: Routes.paylasimliaraba,
      imageSrc: "image/sharedCar.jpeg",
      altText: "paylasımlı_araba",
      title: "Paylaşımlı Arabalar",
    },
  ];
  const handleNavigateAddSharedCar = () => {
    navigate(Routes.paylasimliarabaekle);
  };
  const handleNavigateAddMinibus = () => {
    navigate(Routes.minibusseferekle);
  };
  const buttonStyle = {
    marginY: "30px",
    borderRadius: "10px",
    fontSize: "1.2rem", // Yazı boyutunu artır
    padding: "15px 30px", // Daha geniş bir içerik alanı
    boxShadow: "0 0 10px 5px rgba(76, 175, 80, 0.2)", // Hafif bir gölge efekti
    "&:hover": {
      boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
    },
  };
  

  const typographyBoxSytle = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    minHeight: "200px",
    margin: 2,
    borderRadius: "15px",
    boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
  };
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
            padding: 2,
            margin: 2,
            textAlign: "center",
          }}
        >
          <span style={{ fontFamily: "cursive", color: "black" }}>
            Minibus ve Özel Araba ile Kolay ve Güvenli Ulaşım
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CategoryButton
          path={categories[0].path}
          imageSrc={categories[0].imageSrc}
          altText={categories[0].altText}
          title={categories[0].title}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Button
          onClick={handleNavigateAddMinibus}
          variant="contained"
          sx={buttonStyle}
        >
          Minibus Sefer Ekle
        </Button>
      </Grid>

      <Grid item xs={12} sm={6} lg={3}>
        <CategoryButton
          path={categories[1].path}
          imageSrc={categories[1].imageSrc}
          altText={categories[1].altText}
          title={categories[1].title}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Box>
          <Button
            onClick={handleNavigateAddSharedCar}
            variant="contained"
            sx={buttonStyle}
          >
            Araba Sefer Ekle
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Box sx={typographyBoxSytle}>
            <Typography variant="h4" sx={{ padding: 2, fontWeight: "bold" }}>
              Ulaşım sayfamız, size iki farklı hizmet sunmaktadır.
            </Typography>
            <Typography sx={{ padding: 2 }}>
              <strong>Minibus Hizmeti:</strong>
              <br />
              İlk hizmetimiz Minibus hizmetidir. Seferler, köydeki minibus
              sahibi kişiler ve Çatalçam Koop adı verilen bir kurum tarafından
              gerçekleştirilmektedir. Bu hizmet, köydeki yakın yerleşim
              yerlerinden minibüs sahibi kişilerin dönüşümlü olarak şehirlere
              sefer yaparak köyün ulaşımını sağlamasını içermektedir. Köyden
              şehire giden araçlar, güzergahındaki ilçelere de ulaşım imkanı
              sunmaktadır. Sayfamızdan Çatalçam Koop ana bayisinin numarasına
              ulaşıp, şoförlerin vardiyalarını öğrenebilirsiniz. sefer yapan
              şoförlerin iletişim bilgilerine ve minibüsün fotoğrafı ile
              plakasına da ulaşabilirsiniz. Aynı zamanda, sefer güzergahı olarak
              hangi rotayı takip ettiğini görebilirsiniz.
              <br />
              <br />
              <strong>Paylaşımlı Araba Hizmeti:</strong>
              <br />
              İkinci hizmetimiz paylaşımlı araba hizmetidir. Bireysel arabalarla
              köyden şehire veya şehirden köye istikamet eden insanların, bütçe
              ve yol arkadaşı bulmalarına aracı olmayı hedeflemekteyiz.
              Yolcular, minibüs seferlerine yetişemedikleri, minibüslerin
              gitmediği yerlere gitmek istedikleri durumlarda veya seyahatlerini
              daha konforlu ve kısa sürede gerçekleştirmek istedikleri zaman
              sitemiz sayesinde kendilerine şoför bulabilirler.
              <br />
              <br />
              Şoför ve yolcu arasındaki anlaşma ve güven kendilerinin
              sorumluluğundadır. Sitemiz, şoför ve yolcu arasındaki anlaşma ve
              güvenin sorumluluğunu üstlenmemektedir. İletişimlerini kendi
              başlarına sağlamaktadırlar. Siteye girilen bilgilerin sorumluluğu
              da kullanıcıya aittir. Kullanım koşullarını okumanız önemlidir.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
