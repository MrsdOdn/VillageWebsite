import React from "react";
import StepperCity from "./YolHaritasi";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import FiyatListesi from "./FiyatListesi";

const MinibusDrivers = [
  {
    id: 1,
    name: "Şoför 1",
    surname: "Soyadı 1",
    phoneNumber: "1234567890",
    village: "Çeralan",
    destination: "Adana",
    avatar: "/image/driver.jpeg",
  },
  {
    id: 2,
    name: "Şoför 2",
    surname: "Soyadı 2",
    phoneNumber: "0987654321",
    village: "Çeralan",
    destination: "Saimbeyli",
    avatar: "/image/driver.jpeg",
  },
];

export default function SaimbeyliSeferi() {
  const duraklar = [
    { ad: "Çeralan", saat: "07:00" },
    { ad: "Pekmezli", saat: "07:30" },
    { ad: "Ortaköy", saat: "08:00" },
    { ad: "Doğanbeyli", saat: "08:30" },
    { ad: "Karsavran", saat: "08:00" },
    { ad: "Demiroluk", saat: "08:30" },
    { ad: "Saimbeyli", saat: "11:00" },
  ];
  const fiyatlar = [
    { rota: "Çeralan - Saimbeyli", fiyat: 100 },
    { rota: "Çeralan - Doğanbeyli", fiyat: 75 },
    { rota: "Çeralan - Çatalçam", fiyat: 50 },
    { rota: "Çeralan - Pekmezli", fiyat: 30 },
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
          <Grid container spacing={2}>
            {MinibusDrivers.map((driver) => (
              <Grid key={driver.id} item xs={12} >
                <Card
                  sx={{
                    margin:2,
                    maxWidth: 500,
                    height: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt={`${driver.name} ${driver.surname}`}
                    src={driver.avatar}
                    sx={{ width: 100, height: 100, margin: "auto" }}
                  />
                  <CardContent>
                    <Typography variant="h6">
                      {driver.name} {driver.surname}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      <strong>Telefon Numarası:</strong> {driver.phoneNumber}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      <strong>Yaşadığı Köy:</strong> {driver.village}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      <strong>Sefer Yaptığı Şehir:</strong> {driver.destination}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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
                <strong>Saimbeyli Seferi:</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                Her hafta Perşembe günü, Saimbeyli'de tek bir sefer
                düzenlenmektedir. Bu gün, Saimbeyli'nin pazarının kurulduğu gün
                olarak bilinir.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
}
