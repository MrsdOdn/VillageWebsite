import React from "react";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  CardMedia,
  Avatar,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const MinibusDrivers = [
  {
    id: 1,
    name: "Şoför 1",
    surname: "Soyadı 1",
    phoneNumber: "1234567890",
    village: "Çatalçam",
    destination: "Adana",
    avatar: "/image/driver.jpeg",
  },
  {
    id: 2,
    name: "Şoför 2",
    surname: "Soyadı 2",
    phoneNumber: "0987654321",
    village: "Demiroluk",
    destination: "Kayseri",
    avatar: "/image/driver.jpeg",
  },
  {
    id: 3,
    name: "Şoför 3",
    surname: "Soyadı 3",
    phoneNumber: "0987654321",
    village: "Çeralan",
    destination: "Kayseri",
    avatar: "/image/driver.jpeg",
  },
];

export default function MinibusGenel() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
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
              Minubüs Bilgi Alma Merkezi
            </span>
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              maxWidth: 500,
              boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
              margin: 1,
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Responsive olarak düzen değişikliği
            }}
          >
            <CardMedia
              sx={{
                margin: "auto",
                maxWidth: { xs: "100%", md: "50%" }, // Responsive olarak genişlik değişikliği
                maxHeight: "200",
              }}
              component="img"
              image="/image/catalcamKoop.jpeg" // Burada gerçek bir resim yolunu ekleyin
              alt="Çatalçam Minibüs Durağı"
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                maxWidth: { xs: "100%", md: "50%" }, // Responsive olarak genişlik değişikliği
              }}
            >
              <Typography variant="h6" gutterBottom>
                Çatalçam Minibüs Durağı İletişim:
              </Typography>
              <Typography variant="body2" color="text.primary">
                <LocationOnIcon />
                <strong> Adres:</strong> Çatalçam Köyü (Yeni Cami Altı) 01640
                Tufanbeyli, Adana
              </Typography>
              <Typography variant="body2" color="text.primary">
                <PhoneIcon />
                <strong> Telefon:</strong> 0322 793 25 00
              </Typography>
              <Typography variant="body2" color="text.primary">
                <PhoneAndroidIcon />
                <strong> Telefon:</strong> 0533 967 74 95
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {MinibusDrivers.map((driver) => (
              <Grid key={driver.id} item xs={12} md={6} lg={4}>
                <Card
                  sx={{
                    maxWidth: 500,
                    boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
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
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Adana İlçe Minibüs Kooperatifleri:{" "}
                <strong>ÇATALÇAM KOOP</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                Adana ve Kayseri'ye haftanın her günü düzenlenen seferleriyle
                hizmet veren Çatalçam Kooperatifi, günlük sefer saatlerini
                bineceğiniz durağa göre ayarlamaktadır.
              </Typography>
              <Typography variant="body1" paragraph>
                Sabahları Çatalçam ve çevresindeki köyleri ziyaret ederek Adana
                ve Kayseri istikametine hareket eden minibüsler, dönüş yolunda
                ise Adana ve Kayseri'den köylere yönelir.
              </Typography>
              <Typography variant="body1" paragraph>
                Minibüslerimiz belirli duraklarda durarak yolcularını alır ve
                bırakır. Yol güzergahına Adana Seferi ve Kayseri Seferi
                bölümlerinde detaylı olarak yer verilmiştir.
              </Typography>
              <Typography variant="body1" paragraph>
                Seyahat etmek istediğiniz zaman, o gün sefere çıkacak olan
                şoförü öğrenmek için Çatalçam Koop bayisini arayarak bilgi
                alabilirsiniz. Şoförle iletişime geçerek nereden ve ne zaman
                bineceğinizi öğrenebilirsiniz.
              </Typography>
              <Typography variant="body1" paragraph>
                Minibüs ücretleri gideceğiniz yere göre değişkenlik
                göstermektedir.
              </Typography>
              <Typography variant="body1">
                Unutmayın ki, güzergahlar ve saatler belirli bir düzene tabi
                olabilir, bu nedenle seyahat etmeden önce bilgi almak önemlidir.
                İyi yolculuklar dileriz!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
