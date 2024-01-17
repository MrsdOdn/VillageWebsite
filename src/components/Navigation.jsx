import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Routes from "../utils/Routes"; // Routes dosyanızın yolu

const Navigation = () => {
  const location = useLocation();
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    // Sayfa yolu "/" gibi bir durumdaysa setPaths'e boş bir dizi atıyoruz.
    //setPaths(location.pathname === "/" ? [] : location.pathname.split("/").filter((path) => path !== ""));
    setPaths(location.pathname === "/" ? [] : location.pathname);
  }, [location.pathname]);
  

  const breadcrumbs = [
    { label: "Ana Sayfa", path: Routes.home },
    { label: "Yerel Pazar", path: Routes.yerelPazar },
    { label: "Tanıtım", path: Routes.tanitim },
    { label: "İşletmeler", path: Routes.isletmeler },
    { label: "Ulaşım", path: Routes.ulasim },
    { label: "Galeri", path: Routes.galeri },
    { label: "Hakkında", path: Routes.about },
    { label: "Kullanım Koşulları", path: Routes.kullanimKosullari },
    { label: "Giriş Yap", path: Routes.loginPage },
    { label: "Üye Ol", path: Routes.signUp },
    { label: "Süt Ürünleri", path: Routes.suturunleri },
    { label: "Ürün Ekle", path: Routes.pazarurunekle },
    { label: "Mobilyalar", path: Routes.mobilyalar },
    { label: "Meyve ve Sebzeler", path: Routes.meyvesebze },
    { label: "İnşaat Malzemeleri", path: Routes.insaatmalzemeleri },
    { label: "İkinci el Eşyalar", path: Routes.ikinciel },
    { label: "Hayvan Satış", path: Routes.hayvanlar },
    { label: "Elişleri", path: Routes.elisleri },
    { label: "Baklagiller", path: Routes.baklagiller },
    { label: "Baharatlar", path: Routes.baharatlar },
    { label: "Minibus Sefer Ekle", path: Routes.minibusseferekle },
    { label: "Araba Sefer Ekle", path: Routes.paylasimliarabaekle },
    { label: "Paylaşımlı Arabalar", path: Routes.paylasimliaraba },
    { label: "Minibüs Seferleri", path: Routes.minibus },
  ];

  //Kullanıcının şu anki sayfasına göre bir breadcrumb dizisi oluşturuluyor 
  const currentBreadcrumbs = [
    ...breadcrumbs.filter((breadcrumb) =>
      paths.includes(breadcrumb.path.slice(1))
    ),
  ];
 
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {currentBreadcrumbs.map((breadcrumb, index) => (
        <Link
          key={index}
          component={RouterLink}
          to={breadcrumb.path}
          sx={{
            color:
              index === currentBreadcrumbs.length - 1 ? "black" : "darkgray",
            textDecoration: "none",
            "&:hover": {
              color: "black",
            },
          }}
        >
          {breadcrumb.label}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default Navigation;