import React from "react";
import StepperCity from "./YolHaritasi";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import FiyatListesi from "./FiyatListesi";

export default function AdanaSeferi() {
  const duraklar = [
    { ad: "Çeralan", saat: "07:00" },
    { ad: "Pekmezli", saat: "07:30" },
    { ad: "Ortaköy", saat: "08:00" },
    { ad: "Karsavran", saat: "08:00" },
    { ad: "Demiroluk", saat: "08:30" },
    { ad: "Çatalçam", saat: "08:30" },
    { ad: "Doğanbeyli", saat: "10:00" },
    { ad: "Saimbeyli", saat: "12:30" },
    { ad: "Feke", saat: "14:45" },
    { ad: "Kozan", saat: "10:00" },
    { ad: "İmamoğlu", saat: "12:30" },
    { ad: "Sarıçam", saat: "14:45" },
    { ad: "Yüreğir Otogarı", saat: "17:15" },
  ];
  const fiyatlar = [
    { rota: "Çeralan - Saimbeyli", fiyat: 100 },
    { rota: "Çeralan - Feke", fiyat: 150 },
    { rota: "Çeralan - Kozan", fiyat: 200 },
    { rota: "Çeralan - Adana", fiyat: 250 },
    { rota: "Çeralan - Saimbeyli", fiyat: 100 },
  ];

  return (
    <Box>
      <Grid container spacing={2} justifyContent={"space-evenly"}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{
              borderRadius: 15,
              boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
              padding: 1,
              margin: 2,
              textAlign: "center",
              fontFamily: "cursive",
              color: "black",
            }}
          >
            Minibüs Güzergahı
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StepperCity duraklar={duraklar} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{
              borderRadius: "15px",
              boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
              padding: 1,
              margin: 2,
              textAlign: "center",
            }}
          >
            <span style={{ fontFamily: "cursive", color: "black" }}>
              Fiyat Listesi
            </span>
          </Typography>
          <FiyatListesi fiyatlar={fiyatlar} />
        </Grid>
        <Grid item xs={12}>
          <Card
            sx={{
              boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
              margin: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                <strong>Adana Seferi:</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                {" "}
                Adana'ya düzenlenen seferler haftanın her günü mevcuttur. Her
                gün gerçekleştirilen bu seferler, şehirler arası seyahat etmek
                isteyenler için günlük bir seçenek sunar. Minibüsler, her gün
                sadece tek bir sefer gerçekleştirir, bu da günlük planınıza
                uygun bir esneklik sağlar. Adana seferleriyle seyahat ederek
                şehirler arası yolculuğunuzu konforlu ve güvenli bir şekilde
                gerçekleştirebilirsiniz.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
