import React from "react";
import StepperCity from "./YolHaritasi";
import FiyatListesi from "./FiyatListesi";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export default function KayseriSefer() {
  const duraklar = [
    { ad: "Çeralan", saat: "07:00" },
    { ad: "Pekmezli", saat: "07:30" },
    { ad: "Ortaköy", saat: "08:00" },
    { ad: "Çatalçam", saat: "08:30" },
    { ad: "Karsavran", saat: "08:00" },
    { ad: "Demiroluk", saat: "08:30" },
    { ad: "Develi", saat: "11:00" },
    { ad: "Seyyid Burhanettin Durağı", saat: "12:00" },
    { ad: "Kayseri Lisesi", saat: "12:30" },
    { ad: "Kayseri Otogar", saat: "13:00" },
    { ad: "Kayseri Şehir Hastanesi", saat: "13:30" },
  ];
  const fiyatlar = [
    { rota: "Çeralan - Kayseri", fiyat: 200 },
    { rota: "Çeralan - Develi", fiyat: 150 },
    { rota: "Çeralan - Çatalçam", fiyat: 50 },
    { rota: "Çatalçam - Kayseri", fiyat: 150 },
    { rota: "Çatalçam - Develi", fiyat: 100 },
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
                <strong>Kayseri Seferi:</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                Kayseri'ye düzenlenen seferler haftanın her günü mevcuttur. Her
                gün gerçekleştirilen bu seferler, şehirler arası seyahat etmek
                isteyenler için günlük bir seçenek sunar. Minibüsler, her gün
                sadece tek bir sefer gerçekleştirir, bu da günlük planınıza
                uygun bir esneklik sağlar. Kayseri seferleriyle seyahat ederek
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
