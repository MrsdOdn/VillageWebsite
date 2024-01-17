import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button, Grid, Typography } from "@mui/material";
import NewsCarousel from "../components/NewsCarousel";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const newsList = [
  {
    id: 1,
    category: "haber",
    title: "Köy Köşesi: Anında Haber, Anında Dayanışma",
    content:
      "Köydeki gelişmeleri sizlere güvenilir ve hızlı bir şekilde ulaştırmayı amaçlıyoruz. Bu platform aracılığıyla, vefat ve ağır hastalık gibi önemli durumlardan haberdar olabileceğiniz gibi, muhtarlık anonsları, sağlık ocağı doktor anonsları ve okulumuzdan gelen duyuruları da takip edebileceksiniz.",
    image: "/image/news.jpeg",
    addedDate: "12 Ocak 2024 14:30",
  },
  {
    id: 2,
    category: "vefat",
    title: "Vefat Haberi",
    content:
      "Köyümüzden ${death.personName} isimli değerli insan, ${death.deathDate} tarihinde vefat etmiştir. Cenaze namazı ${death.funeralPrayerDate} tarihinde ${death.funeralPrayerLocation} adresinde kılınacaktır. Allah'tan rahmet, kederli ailesine ve sevenlerine başsağlığı dileriz. Mekânı cennet olsun.",
    image: "/image/vefat.jpeg",
    addedDate: "13 Ocak 2024 16:45",
  },
  {
    id: 3,
    category: "düğün",
    title: "Görsel Şölen: Örnek Düğün Daveti",
    content:
      "Sevgili dostlarımız, sizi en mutlu günümüze davet etmekten büyük bir mutluluk duyuyoruz. Evlenme kararı aldık ve bu özel günümüzü sizlerle paylaşmak istiyoruz. Sizleri aramızda görmek bize büyük bir mutluluk katacaktır. Davetimize icabet ederseniz, bu özel günümüzü birlikte kutlamaktan onur duyarız.",
    image: "/image/dugun.jpeg",
    addedDate: "14 Ocak 2024 10:15",
  },
];

function Haberler() {
  const [newsDataset, setNewsDataset] = useState(newsList);
  const navigate = useNavigate();

  const location = useLocation();
  const { newsData } = location.state || {};
  console.log("Yönlendirilen haberler:", newsData);

  useEffect(() => {
    if (newsData) {
      addNewsData(newsData);
    }
  }, [newsData]);

  const addNewsData = (newNewsData) => {
    const updatedNewsDataset = {
      ...newNewsData,
      id:
        newsDataset.length > 0 ? newsDataset[newsDataset.length - 1].id + 1 : 1,
    };
    setNewsDataset((prevNewsDataset) => [
      ...prevNewsDataset,
      updatedNewsDataset,
    ]);
  };

  const filterUniqueNewsDatasetById = (newsDataset) => {
    const uniqueNewsDataset = [];
    const seenIds = new Set();

    newsDataset.forEach((newsData) => {
      if (!seenIds.has(newsData.id)) {
        uniqueNewsDataset.push(newsData);
        seenIds.add(newsData.id);
      }
    });

    return uniqueNewsDataset;
  };

  const typographyBoxSytle = {
    display: "flex",
    backgroundColor: "#CDD0CB",
    borderRadius: "15px",
    boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
    margin: 2,
  };
  const boxSytle = {
    display: "flex",
    backgroundColor: "#EFF2EC",
    borderRadius: "15px",
    boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
    margin: 2,
  };
  const buttonStyle = {
    backgroundColor: "#5D5E5C",
    color: "white",
    margin: 2,
    borderRadius: "10px",
    fontSize: "1.2rem",
    padding: "15px 30px",
    boxShadow: "0 0 10px 5px rgba(76, 175, 80, 0.2)",
    "&:hover": {
      backgroundColor: "#CDD0CB",
      boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box>
            <NewsCarousel newsList={filterUniqueNewsDatasetById(newsDataset)} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={buttonStyle}
            endIcon={<AddCircleIcon sx={{ marginLeft: 1 }} />}
            onClick={() => navigate("/haberekle")}
          >
            Haber Ekle
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Box sx={boxSytle}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  padding: 2,
                  marginLeft: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "cursive", color: "black" }}>
                  Köşe Yazısı
                </span>
              </Typography>
              <Box
                sx={{
                  padding: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Typography
                  sx={{ padding: 2, maxWidth: "80%", textAlign: "left" }}
                >
                  Köy, doğanın kollarında huzurlu bir uykuya dalan bir rüya
                  gibidir. Her sabah, kuş cıvıltılarıyla uyanır, tarlalardan mis
                  gibi toprak kokuları gelir. Köy meydanındaki çınar ağacı,
                  zamanın ötesinde duran bir dosttur. Gün batımında ise köy,
                  rengarenk bir tabloya dönüşür.
                  <br />
                  <br />
                  Komşuluk, köydeki en değerli mirastır. Gülen yüzler,
                  yardımlaşma ve kucaklaşmalar köy halkının günlük
                  ritüelleridir. Her ev, birbirine sıcaklık ve samimiyetle
                  bağlıdır. Çocuklar, köy okulunda bilgiyle buluşur, yaşlılar
                  köy kahvesinde anılarla geçmişi yad eder.
                  <br />
                  <br />
                  Köy, küçük ama büyük bir ailedir. Herkes, birbirinin adını
                  bilir, yıldızların altında yapılan sohbetler unutulmazdır.
                  Gülüşlerin ve paylaşılan anıların olduğu bu köy, gerçek bir
                  yaşamın kalbindeki essiz bir noktadır.
                </Typography>
                <img
                  src="/image/koseyazisi.jpeg"
                  alt=""
                  style={{
                    maxWidth: "50%",
                    maxHeight: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={boxSytle}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  padding: 2,
                  marginLeft: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "cursive", color: "black" }}>
                  Bilgi Köşesi:
                </span>
              </Typography>
              <Box
                sx={{
                  padding: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Typography
                  sx={{ padding: 2, maxWidth: "80%", textAlign: "left" }}
                >
                  <strong>
                    İlginç Bilgi: Balıklar Uyumak İçin Gözlerini Kapatmazlar
                  </strong>
                  <br />
                  <br />
                  Balıkların çoğu, uyumak için gözlerini kapatmaz. Çünkü
                  balıkların göz kapakları yoktur. Bunun yerine, bazı balıklar
                  tek bir gözü kapatırken, diğerini açık tutabilir. Bu durum,
                  balıkların uyurken de çevrelerini gözlemlemelerine ve
                  tehlikelerden korunmalarına yardımcı olur. Balıkların uykusu,
                  insanlarınkinden oldukça farklı bir süreçtir ve genellikle
                  belirli bir dinlenme dönemi olarak kabul edilir.
                </Typography>
                <img
                  src="/image/sasırancocuk.jpeg"
                  alt=""
                  style={{
                    maxWidth: "50%",
                    maxHeight: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={typographyBoxSytle}>
            <Box>
              <Typography
                variant="h4"
                sx={{ padding: 2, fontWeight: "bold", marginLeft: 3 }}
              >
                <span style={{ fontFamily: "cursive", color: "black" }}>
                  Köy Köşesi: Anında Haber, Anında Dayanışma
                </span>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <img
                  src="/image/newsboy.jpeg"
                  alt="Köy Köşesi Resmi"
                  style={{
                    maxWidth: "50%",
                    maxHeight: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginRight: "10px",
                    color: "#CDD0CB",
                  }}
                />
                <Typography
                  sx={{ padding: 2, maxWidth: "80%", textAlign: "left" }}
                >
                  Köydeki gelişmeleri sizlere güvenilir ve hızlı bir şekilde
                  ulaştırmayı amaçlıyoruz. Bu platform aracılığıyla, vefat ve
                  ağır hastalık gibi önemli durumlardan haberdar olabileceğiniz
                  gibi, muhtarlık anonsları, sağlık ocağı doktor anonsları ve
                  okulumuzdan gelen duyuruları da takip edebileceksiniz.
                  <br />
                  <br />
                  Köyümüzdeki yenilikleri sizlere aktararak köy yaşantısını daha
                  yakından paylaşmayı amaçlıyoruz. Sosyal, kültürel ve ekonomik
                  gelişmeleri paylaşarak bir araya gelmemizi sağlayacak bir
                  platform sunuyoruz. Ayrıca, düğün, nişan, asker uğurlama gibi
                  mutlu anlarınızı hızlıca paylaşabilmeniz için de bir imkan
                  sunuyoruz.
                  <br />
                  <br />
                  Köy dayanışmasını güçlendirmeyi ve acil durum müdahalelerini
                  hızlandırmayı planlıyoruz. Yangın, deprem gibi afet
                  durumlarında koordinasyon içinde hareket ederek köyümüzü
                  güvende tutmayı amaçlıyoruz.
                  <br />
                  <br />
                  Sizinle birlikte köyümüzün güzel ve zorlu anlarında bir arada
                  olmayı ve dayanışmayı sürdürmeyi hedefliyoruz. İyi günlerde ve
                  zor zamanlarda birbirimize destek olmak için buradayız. Her
                  türlü geri bildiriminiz bizim için önemlidir.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Haberler;
