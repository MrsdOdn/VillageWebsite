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
  {
    id: 1,
    category: "suturunleri",
    subcategory: "İnek Sütü",
    image: "/image/sutUrunleri.jpeg",
    description: "Sağlıklı ve taze inek sütü",
    seller: {
      name: "Ahmet",
      surname: "Yazar",
      number: "5551234567",
    },
    unit: "litre",
    price: "5",
    shippingType: "ucretsiz kargo",
    addedDate: "2024-01-09 14:30",
  },
  {
    id: 2,
    category: "suturunleri",
    subcategory: "Keçi Sütü",
    image: "/image/sutUrunleri.jpeg",
    description: "Doğal ve organik keçi sütü",
    seller: {
      name: "Ayşe",
      surname: "Demir",
      number: "5559876543",
    },
    unit: "litre",
    price: "7",
    shippingType: "ucretli kargo",
    addedDate: "2024-01-09 15:45",
  },
  {
    id: 3,
    category: "suturunleri",
    subcategory: "Yoğurt",
    image: "/image/sutUrunleri.jpeg",
    description: "Ev yapımı yoğurt",
    seller: {
      name: "Mehmet",
      surname: "Kaya",
      number: "5558765432",
    },
    unit: "kg",
    price: "8",
    shippingType: "ucretsiz kargo",
    addedDate: "2024-01-09 16:30",
  },
];

export default function SutVeSutUrunleri() {
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
          <Tab label="İnek Sütü" {...a11yProps(2)} />
          <Tab label="Keçi Sütü" {...a11yProps(3)} />
          <Tab label="Koyun Sütü" {...a11yProps(4)} />
          <Tab label="Ağız Sütü" {...a11yProps(5)} />
          <Tab label="Çökelek" {...a11yProps(6)} />
          <Tab label="Peynir" {...a11yProps(7)} />
          <Tab label="Hellim" {...a11yProps(8)} />
          <Tab label="Nor" {...a11yProps(9)} />
          <Tab label="Ayran" {...a11yProps(10)} />
          <Tab label="Yoğurt" {...a11yProps(11)} />
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
          <Box sx={boxStyles}>{renderProductsBySubcategory("İnek Sütü")}</Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Keçi Sütü")}</Box>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Koyun Sütü")}</Box>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Ağız Sütü")}</Box>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Çökelek")}</Box>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Peynir")}</Box>
        </TabPanel>
        <TabPanel value={value} index={8}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Hellim")}</Box>
        </TabPanel>
        <TabPanel value={value} index={9}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Nor")}</Box>
        </TabPanel>
        <TabPanel value={value} index={10}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Ayran")}</Box>
        </TabPanel>
        <TabPanel value={value} index={11}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Yoğurt")}</Box>
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}
