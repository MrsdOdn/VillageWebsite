import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Typography,
  Box,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import BazaarProductCard from "../../components/BazaarProductCard";
import ImagesUpload from "../../components/ImagesUpload ";
import Routes from "../../utils/Routes";
import { useNavigate } from "react-router-dom";

const UrunEkle = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    category: "",
    subcategory: "",
    image: null,
    description: "",
    seller: {
      name: "",
      surname: "",
      number: "",
    },
    unit: "",
    price: "",
    shippingType: "",
    addedDate: "",
  });
  const [phoneNumberError, setPhoneNumberError] = useState(null);

  const categories = [
    {
      value: "suturunleri",
      label: "Süt Ürünleri",
      imageSrc: "image/sutUrunleri.jpg",
    },
    {
      value: "meyvesebze",
      label: "Meyve ve Sebze",
      imageSrc: "image/meyveSebze.jpeg",
    },
    {
      value: "hayvanlar",
      label: "Hayvan Satış",
      imageSrc: "image/hayvanTicareti.jpeg",
    },
    {
      value: "insaatmalzemeleri",
      label: "Hırdavat",
      imageSrc: "image/insaatMalzemeleri.jpeg",
    },
    {
      value: "baklagiller",
      label: "Baklagiil Çeşitleri",
      imageSrc: "image/baklagiller.jpeg",
    },
    { value: "elisleri", label: "El İşleri", imageSrc: "image/elisleri.jpeg" },
    {
      value: "mobilyalar",
      label: "Mobilya Bölümü",
      imageSrc: "image/mobilyaUrunleri.jpeg",
    },
    {
      value: "baharatlar",
      label: "Baharatlar",
      imageSrc: "image/baharatlar.jpeg",
    },
    {
      value: "ikinciel",
      label: "İkinci El Satış",
      imageSrc: "image/secondSales.jpeg",
    },
  ];

  const subcategories = {
    suturunleri: [
      "Diğer...",
      "İnek Sütü",
      "Keçi Sütü",
      "Koyun Sütü",
      "Ağız Sütü",
      "Çökelek",
      "Peynir",
      "Hellim",
      "Nor",
      "Ayran",
      "Yoğurt",
    ],
    meyvesebze: [
      "Diğer...",
      "Elma",
      "Armut",
      "Çilek",
      "Üzüm",
      "Kiraz",
      "Vişne",
      "Erik",
      "Dut",
      "Karpuz",
      "Şeftali",
      "Kuşburnu",
      "Böğürtlen",
      "Ceviz",
      "Domates",
      "Salatalık",
      "Acur",
      "Biber",
      "Kabak",
      "Patates",
      "Patlıcan",
      "Soğan",
      "Sarımsak",
      "Pırasa",
      "Lahana",
      "Mısır",
      "Havuç",
      "Bezelye",
      "Taze Fasulye",
      "Yeşillik",
      "Marul",
      "Maydanoz",
      "Dereotu",
    ],
    hayvanlar: [
      "Diğer...",
      "İnek",
      "Koyun",
      "Keçi",
      "Tavuk",
      "Balık",
      "Kaz",
      "Eşek",
      "At",
      "Kuş",
    ],
    insaatmalzemeleri: [
      "Diğer...",
      "Demir",
      "Çimento",
      "Kum",
      "Çakıl",
      "Briket",
      "Tuğla",
      "Seramik",
      "Fayans",
      "Elektrik Malzemesi",
      "Su Malzemesi",
      "Vida",
      "Çivi",
      "Ölçüm Aletleri",
      "El Aletleri",
      "Asma Kilitler",
      "Boya Malzemeleri",
    ],
    baklagiller: [
      "Diğer...",
      "Nohut",
      "Fasulye",
      "Mercimek",
      "Kuru Fasulye",
      "Börülce",
      "Bezelye",
      "Bulgur",
      "Topalanlık",
      "Tarhana",
      "",
      "",
      "",
    ],
    elisleri: [
      "Diğer...",
      "Banyo Lifleri",
      "Eşarp Oyası",
      "Örgü Giyim",
      "Amigurumi Oyuncaklar",
      "Dikiş ve Nakış",
      "Ahşap İşleri",
      "Kaynak İşleri",
      "Kilim",
      "Takı",
      "",
      "",
      "",
    ],
    mobilyalar: [
      "Diğer...",
      "Sehba",
      "Masa",
      "Dolap",
      "Yatak",
      "Divan",
      "Sandalye",
      "Kapı",
      "Çekyat",
      "",
      "",
    ],
    baharatlar: [
      "Diğer...",
      "Nane",
      "Kekik",
      "Sumak",
      "Tuz",
      "Dağ Çayı",
      "Kimyon",
      "Karabiber",
      "",
    ],
    ikinciel: [
      "Diğer...",
      "Kıyafet",
      "Ayakkabı",
      "Motor",
      "Araba",
      "Telefon",
      "Bilgisayar",
      "Elektronik Eşya",
      "Bisiklet",
      "Mobilya",
      "Beyaz Eşya",
      "Kitap",
      "Bebek Eşyaları",
    ],
  };

  const shippingOption = [
    { value: "kargo yok", label: "Kargo ve Teslimat Yok" },
    { value: "yerel teslimat", label: "Yerel Teslimat (El Teslimi)" },
    { value: "ucretsiz kargo", label: "Ücretsiz Kargo" },
    { value: "ucretli kargo", label: "Alıcı Ödemeli Kargo" },
  ];

  const units = [
    { value: "kg", label: "Kilogram (kg)" },
    { value: "adet", label: "Adet (adet)" },
    { value: "litre", label: "Litre (lt)" },
    { value: "metre", label: "Metre (m)" },
    { value: "metrekare", label: "Metrekare (m²)" },
    { value: "cinik", label: "Çinik (tahmini 8 kilo)" },
    { value: "bağ", label: "Bağ" },
    { value: "diger", label: "Diğer" },
  ];

  const isValidPhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);

  const handleImageUpload = (file) => {
    setProduct({
      ...product,
      image: file,
    });
  };

  const handleCategoryChange = (selectedCategory) => {
    setProduct({
      ...product,
      category: selectedCategory,
      subcategory: "",
    });
  };

  const handleInputChange = (field, value) => {
    if (field === "seller.number") {
      const isValid = isValidPhoneNumber(value);
      setPhoneNumberError(
        isValid ? null : "Geçerli bir telefon numarası giriniz."
      );
    }
    if (field.startsWith("seller.")) {
      const sellerField = field.split(".")[1];
      setProduct({
        ...product,
        seller: {
          ...product.seller,
          [sellerField]: value,
        },
      });
    } else {
      setProduct({
        ...product,
        [field]: value,
      });
    }
    if (field === "category") {
      setProduct({
        ...product,
        subcategory: "",
      });
    }
  };
  const getCurrentDateTime = () => {
    const currentDateTime = new Date();
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return currentDateTime.toLocaleString(undefined, options);
  };

  const handleAddProduct = () => {
    const addedDateTime = getCurrentDateTime();
    product.addedDate = addedDateTime;
    for (const field in product) {
      if (field === "seller.number" && phoneNumberError) {
        return;
      }

      if (!product[field]) {
        alert(`Lütfen ${field} alanını doldurun.`);
        return;
      }
    }

    const newProduct = {
      ...product,
      id: products.length + 1,
    };
    setProducts([...products, newProduct]);
    console.log("Ürün Eklendi:", newProduct);

    setProduct({
      category: "",
      subcategory: "",
      image: "",
      description: "",
      seller: {
        name: "",
        surname: "",
        number: "",
      },
      unit: "",
      price: "",
      shippingType: "",
      addedDate: "",
    });

    if (product.category) {
      const categorySlug = product.category.toLowerCase();
      const route = Object.values(Routes).find((r) =>
        r.toLowerCase().includes(categorySlug)
      );

      if (route) {
        navigate(route, { state: { product: newProduct } });
      }
    }
  };
  const buttonStyle = {
    marginY: "30px",
    borderRadius: "10px",
    fontSize: "1.2rem",
    padding: "15px 30px",
    boxShadow: "0 0 10px 5px rgba(76, 175, 80, 0.2)",
    "&:hover": {
      boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        marginX: 5,
        backgroundColor: "#CEDEBD",
        padding: 2,
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ color: "#304D30" }}>
            Ürün Ekle
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <FormControl fullWidth>
            <TextField
              label="Satıcı Adı"
              color="success"
              value={product.seller.name}
              onChange={(e) => handleInputChange("seller.name", e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <FormControl fullWidth>
            <TextField
              label="Satıcı Soyadı"
              color="success"
              value={product.seller.surname}
              onChange={(e) =>
                handleInputChange("seller.surname", e.target.value)
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth color="success">
            <InputLabel htmlFor="outlined-adornment-number">
              Telefon Numarası
            </InputLabel>
            <OutlinedInput
              id="filled-adornment-number"
              startAdornment={
                <InputAdornment position="start">+90</InputAdornment>
              }
              label="Satıcı Telefon Numarası"
              color="success"
              value={product.seller.number}
              onChange={(e) =>
                handleInputChange("seller.number", e.target.value)
              }
              error={!!phoneNumberError}
              helperText={phoneNumberError}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            color="success"
            label="Eklemek istediğiniz ürünün resmini seçin:"
            disabled
            marginRight="10px"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            color="success"
            variant="contained"
            sx={{ width: "auto", height: "100%" }}
          >
            <ImagesUpload onImageUpload={handleImageUpload} />
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth color="success">
            <InputLabel>Kategori</InputLabel>
            <Select
              value={product.category}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth color="success">
            <InputLabel>Alt Kategori</InputLabel>
            <Select
              value={product.subcategory}
              onChange={(e) => handleInputChange("subcategory", e.target.value)}
            >
              {subcategories[product.category] &&
                subcategories[product.category].map((subcategory) => (
                  <MenuItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            color="success"
            label="Ürün Açıklaması"
            fullWidth
            value={product.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth color="success">
            <InputLabel>Ölçü Birimi</InputLabel>
            <Select
              value={product.unit}
              onChange={(e) => handleInputChange("unit", e.target.value)}
            >
              {units.map((tip) => (
                <MenuItem key={tip.value} value={tip.value}>
                  {tip.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth color="success">
            <InputLabel htmlFor="outlined-adornment-amount">Fiyat</InputLabel>
            <OutlinedInput
              id="filled-adornment-amount"
              startAdornment={
                <InputAdornment position="start">₺</InputAdornment>
              }
              label="Fiyat"
              value={product.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth color="success">
            <InputLabel>Kargo Seçeneği</InputLabel>
            <Select
              value={product.shippingType}
              onChange={(e) =>
                handleInputChange("shippingType", e.target.value)
              }
            >
              {shippingOption.map((tip) => (
                <MenuItem key={tip.value} value={tip.value}>
                  {tip.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            variant="contained"
            color="success"
            onClick={handleAddProduct}
            sx={buttonStyle}
          >
            Ekle
            <AddSharpIcon sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
      </Grid>
      <BazaarProductCard product={product} />
    </Box>
  );
};

export default UrunEkle;
