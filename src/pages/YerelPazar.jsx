import React from "react";
import { Button, Box, Typography } from "@mui/material";
import BazaarCategory from "../components/BazaarCategory";
import { useNavigate } from "react-router-dom";
import Routes from "../utils/Routes";

function YerelPazar() {
  const navigate = useNavigate();

  const handleNavigateUrunEkle = () => {
    navigate(Routes.pazarurunekle);
  };
  const typographyBoxSytle = {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    minHeight: "200px",
    margin: 2,
    borderRadius: "15px",
    boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
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
            Güvenli ve Doğal Ürün Ticareti İçin Pratik Bir Platform
          </span>
        </Typography>

        <BazaarCategory />
        <Button
          onClick={handleNavigateUrunEkle}
          color="success"
          variant="contained"
          sx={{
            marginY: "30px",
            borderRadius: "10px",
            fontSize: "1.2rem", // Yazı boyutunu artır
            padding: "15px 30px", // Daha geniş bir içerik alanı
            boxShadow: "0 0 10px 5px rgba(76, 175, 80, 0.2)", // Hafif bir gölge efekti
            "&:hover": {
              backgroundColor: "#388e3c", // Hover durumunda renk değişikliği
            },
          }}
        >
          Ürün Ekle
        </Button>

        <Box sx={typographyBoxSytle}>
          <Typography variant="h4" sx={{ padding: 2, fontWeight: "bold" }}>
            Yerel Pazarımıza Hoş Geldiniz
          </Typography>
          <Typography sx={{ padding: 2 }}>
            Yerel pazar sayfamızla, siz değerli köylülerimizi alıcı ve satıcı
            arasındaki üçüncü şahısları ortadan kaldırarak ürünlerinizi birebir
            tanıtmanıza ve satmanıza yardımcı olmayı hedefliyoruz. Burada,
            satışınız için reklam yapabilir ve alıcıların sizinle iletişime
            geçmesini sağlayabilirsiniz. Ürün eklemek istiyorsanız, ilk olarak
            üye olmanız veya zaten üyeyseniz giriş yapmanız gerekmektedir.
            <br />
            <br />
            Değerli alıcılarımıza da doğal ürünlere ulaşmaları konusunda
            yardımcı olmayı amaçlıyoruz. Ürünleri incelemek için üyelik
            gerekmemektedir. Platformumuz, karşılıklı güvene dayalı bir yapıya
            sahiptir. Alıcılar ve satıcılar, kendi aralarında iletişim kurarak
            anlaşma sağlayacaklardır.
            <br />
            <br />
            Sitemiz sadece bir aracı konumundadır. Satış ve alım işlemlerinizden
            kaynaklanan herhangi bir sıkıntı için sorumluluk kabul etmemekteyiz.
            Kullanım koşullarını dikkatlice okumanız önemlidir.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default YerelPazar;
