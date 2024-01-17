import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BazaarProductCard from "../../components/BazaarProductCard";
import { useLocation } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Yeşil renk
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const exampleProducts = [
  // Süt Ürünleri
  {
    id: 1,
    category: "mobilyalar",
    subcategory: "Sehba",
    image: "/image/mobilyaUrunleri.jpeg",
    description: "boyları ortalamadır.",
    seller: {
      name: "Ahmet",
      surname: "Yazar",
      number: "5551234567",
    },
    unit: "adet",
    price: "300",
    shippingType: "ucretsiz kargo",
    addedDate: "2024-01-09 14:30",
  },
  {
    id: 2,
    category: "mobilyalar",
    subcategory: "Çekyat",
    image: "/image/mobilyaUrunleri.jpeg",
    description: "Açılır kapanır ahşap yapıdadır.",
    seller: {
      name: "Ayşe",
      surname: "Demir",
      number: "5559876543",
    },
    unit: "adet",
    price: "1200",
    shippingType: "ucretli kargo",
    addedDate: "2024-01-09 15:45",
  },
  {
    id: 3,
    category: "mobilyalar",
    subcategory: "Masa",
    image: "/image/mobilyaUrunleri.jpeg",
    description: "Ceviz ağacından yapılmıştır.",
    seller: {
      name: "Mehmet",
      surname: "Kaya",
      number: "5558765432",
    },
    unit: "adet",
    price: "400",
    shippingType: "ucretsiz kargo",
    addedDate: "2024-01-09 16:30",
  },
];

export default function MobilyaSatis() {
  const [products, setProducts] = useState(exampleProducts);
  const [value, setValue] = React.useState(0);

  const location = useLocation();
  const { product } = location.state || {};
  console.log("Yönlendirilen Ürün:", product);

  useEffect(() => {
    if (product) {
      addProduct(product);
    }
  }, []);

  const addProduct = (newProduct) => {
    const updatedProduct = {
      ...newProduct,
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    };
    setProducts((prevProducts) => [...prevProducts, updatedProduct]);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterUniqueProductsById = (products) => {
    const uniqueProducts = [];
    const seenIds = new Set();

    products.forEach((product) => {
      if (!seenIds.has(product.id)) {
        uniqueProducts.push(product);
        seenIds.add(product.id);
      }
    });

    return uniqueProducts;
  };

  const renderProductsBySubcategory = (subcategory) => {
    const filteredProducts = products.filter(
      (product) => product.subcategory === subcategory
    );
    const uniqueProducts = filterUniqueProductsById(filteredProducts);

    return uniqueProducts.map((product) => (
      <BazaarProductCard key={product.id} product={product} />
    ));
  };
  const boxStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          width: "100%",
        }}
      >
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{
            border: 2,
            borderColor: "divider",
            boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Tab label="Tüm Ürünler" {...a11yProps(0)} />
          <Tab label="Diğer..." {...a11yProps(1)} />
          <Tab label="Sehba" {...a11yProps(2)} />
          <Tab label="Masa" {...a11yProps(3)} />
          <Tab label="Dolap" {...a11yProps(4)} />
          <Tab label="Yatak" {...a11yProps(5)} />
          <Tab label="Divan" {...a11yProps(6)} />
          <Tab label="Sandalye" {...a11yProps(7)} />
          <Tab label="Kapı" {...a11yProps(8)} />
          <Tab label="Çekyat" {...a11yProps(9)} />
          <Tab label="Ekstra1" {...a11yProps(10)} />
          <Tab label="Ekstra2" {...a11yProps(11)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box sx={boxStyles}>
            {filterUniqueProductsById(products).map((uniqueProduct) => (
              <BazaarProductCard
                key={uniqueProduct.id}
                product={uniqueProduct}
              />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Diğer...")}</Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Sehba")}</Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Masa")}</Box>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Dolap")}</Box>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Yatak")}</Box>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Divan")}</Box>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Sandalye")}</Box>
        </TabPanel>
        <TabPanel value={value} index={8}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Kapı")}</Box>
        </TabPanel>
        <TabPanel value={value} index={9}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Çekyat")}</Box>
        </TabPanel>
        <TabPanel value={value} index={10}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Ekstra1")}</Box>
        </TabPanel>
        <TabPanel value={value} index={11}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Ekstra2")}</Box>
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}
