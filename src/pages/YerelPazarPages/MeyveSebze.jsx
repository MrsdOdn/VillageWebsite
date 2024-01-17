import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BazaarProductCard from "../../components/BazaarProductCard";

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
    category: "meyvesebze",
    subcategory: "Elma",
    image: "/image/meyveSebze.jpeg",
    description: "Organik ve lezzetli elmalar",
    seller: {
      name: "Fatma",
      surname: "Yıldız",
      number: "5552345678",
    },
    unit: "kg",
    price: "4",
    shippingType: "ucretsiz kargo",
    addedDate: "2024-01-09 17:15",
  },
  {
    id: 2,
    category: "meyvesebze",
    subcategory: "Domates",
    image: "/image/meyveSebze.jpeg",
    description: "Taze ve doğal domatesler",
    seller: {
      name: "Hüseyin",
      surname: "Aydın",
      number: "5557654321",
    },
    unit: "kg",
    price: "3",
    shippingType: "yerel teslimat",
    addedDate: "2024-01-09 18:00",
  },
  {
    id: 3,
    category: "meyvesebze",
    subcategory: "Salatalık",
    image: "/image/meyveSebze.jpeg",
    description: "Bahçeden taze salatalıklar",
    seller: {
      name: "Zehra",
      surname: "Demirci",
      number: "5551122334",
    },
    unit: "adet",
    price: "1",
    shippingType: "ucretsiz kargo",
    addedDate: "2024-01-09 19:30",
  },
];

export default function MeyveSebze() {
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
          <Tab label="Elma" {...a11yProps(2)} />
          <Tab label="Armut" {...a11yProps(3)} />
          <Tab label="Çilek" {...a11yProps(4)} />
          <Tab label="Üzüm" {...a11yProps(5)} />
          <Tab label="Kiraz" {...a11yProps(6)} />
          <Tab label="Vişne" {...a11yProps(7)} />
          <Tab label="Erik" {...a11yProps(8)} />
          <Tab label="Dut" {...a11yProps(9)} />
          <Tab label="Karpuz" {...a11yProps(10)} />
          <Tab label="Şeftali" {...a11yProps(11)} />
          <Tab label="Kuşburnu" {...a11yProps(12)} />
          <Tab label="Böğürtlen" {...a11yProps(13)} />
          <Tab label="Ceviz" {...a11yProps(14)} />
          <Tab label="Domates" {...a11yProps(15)} />
          <Tab label="Salatalık" {...a11yProps(16)} />
          <Tab label="Acur" {...a11yProps(17)} />
          <Tab label="Biber" {...a11yProps(18)} />
          <Tab label="Kabak" {...a11yProps(19)} />
          <Tab label="Patates" {...a11yProps(20)} />
          <Tab label="Patlıcan" {...a11yProps(21)} />
          <Tab label="Soğan" {...a11yProps(22)} />
          <Tab label="Sarımsak" {...a11yProps(23)} />
          <Tab label="Pırasa" {...a11yProps(24)} />
          <Tab label="Lahana" {...a11yProps(25)} />
          <Tab label="Mısır" {...a11yProps(26)} />
          <Tab label="Havuç" {...a11yProps(27)} />
          <Tab label="Bezelye" {...a11yProps(28)} />
          <Tab label="Taze Fasulye" {...a11yProps(29)} />
          <Tab label="Yeşillik" {...a11yProps(30)} />
          <Tab label="Marul" {...a11yProps(31)} />
          <Tab label="Maydanoz" {...a11yProps(32)} />
          <Tab label="Dereotu" {...a11yProps(33)} />
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
          <Box sx={boxStyles}>{renderProductsBySubcategory("Elma")}</Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Armut")}</Box>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Çilek")}</Box>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Üzüm")}</Box>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Kiraz")}</Box>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Vişne")}</Box>
        </TabPanel>
        <TabPanel value={value} index={8}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Erik")}</Box>
        </TabPanel>
        <TabPanel value={value} index={9}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Dut")}</Box>
        </TabPanel>
        <TabPanel value={value} index={10}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Karpuz")}</Box>
        </TabPanel>
        <TabPanel value={value} index={11}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Şeftali")}</Box>
        </TabPanel>
        <TabPanel value={value} index={12}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Kuşburnu")}</Box>
        </TabPanel>
        <TabPanel value={value} index={13}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Böğürtlen")}</Box>
        </TabPanel>
        <TabPanel value={value} index={14}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Ceviz")}</Box>
        </TabPanel>
        <TabPanel value={value} index={15}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Domates")}</Box>
        </TabPanel>
        <TabPanel value={value} index={16}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Salatalık")}</Box>
        </TabPanel>
        <TabPanel value={value} index={17}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Acur")}</Box>
        </TabPanel>
        <TabPanel value={value} index={18}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Biber")}</Box>
        </TabPanel>
        <TabPanel value={value} index={19}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Kabak")}</Box>
        </TabPanel>
        <TabPanel value={value} index={20}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Patates")}</Box>
        </TabPanel>
        <TabPanel value={value} index={21}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Patlıcan")}</Box>
        </TabPanel>
        <TabPanel value={value} index={22}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Soğan")}</Box>
        </TabPanel>
        <TabPanel value={value} index={23}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Sarımsak")}</Box>
        </TabPanel>
        <TabPanel value={value} index={24}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Pırasa")}</Box>
        </TabPanel>
        <TabPanel value={value} index={25}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Lahana")}</Box>
        </TabPanel>
        <TabPanel value={value} index={26}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Mısır")}</Box>
        </TabPanel>
        <TabPanel value={value} index={27}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Havuç")}</Box>
        </TabPanel>
        <TabPanel value={value} index={28}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Bezelye")}</Box>
        </TabPanel>
        <TabPanel value={value} index={29}>
          <Box sx={boxStyles}>
            {renderProductsBySubcategory("Taze Fasulye")}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={30}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Yeşillik")}</Box>
        </TabPanel>
        <TabPanel value={value} index={31}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Marul")}</Box>
        </TabPanel>
        <TabPanel value={value} index={32}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Maydanoz")}</Box>
        </TabPanel>
        <TabPanel value={value} index={33}>
          <Box sx={boxStyles}>{renderProductsBySubcategory("Dereotu")}</Box>
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}
