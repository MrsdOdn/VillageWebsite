import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import PropTypes from "prop-types";
import MinibusCard from "../../components/MinibusCard";
import MinibusGenel from "../../components/MinibusGenel";
import AdanaSeferi from "../../components/AdanaSeferi";
import KayseriSeferi from "../../components/KayseriSefer";
import SaimbeyliSeferi from "../../components/SaimbeyliSeferi";

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
const sampleData = [
  {
    id: 1,
    driver: {
      name: "Ahmet",
      surname: "Kurşun",
      phoneNumber: "5555555555",
    },
    image: "/image/minibus.jpeg",
    description: "Örnek Açıklama 1",
    departure: "Çeralan",
    destination: "Kayseri",
    route: "Örnek Güzergah 1",
    price: 250,
    date: new Date(2024, 1, 15, 10, 0),
    addedDate: "2024-01-12 12:00",
  },
  {
    id: 2,
    driver: {
      name: "Emine",
      surname: "Üzgü",
      phoneNumber: "5555555555",
    },
    image: "/image/minibus.jpeg",
    description: "Örnek Açıklama 2",
    departure: "Çeralan",
    destination: "Kayseri",
    route: "Örnek Güzergah 2",
    price: 150,
    date: new Date(2024, 1, 15, 10, 0),
    addedDate: "2024-01-12 12:00",
  },
];

export default function Minibus() {
  const [minibuses, setMinibuses] = useState(sampleData);
  const [value, setValue] = React.useState(0);

  const location = useLocation();
  const { minibus } = location.state || {};
  console.log("Yönlendirilen Araç Seferi:", minibus);

  useEffect(() => {
    if (minibus) {
      addMinibus(minibus);
    }
  }, [minibus]);

  const addMinibus = (newMinibus) => {
    const updatedminibuses = {
      ...newMinibus,
      id: minibuses.length > 0 ? minibuses[minibuses.length - 1].id + 1 : 1,
    };
    setMinibuses((prevminibuses) => [...prevminibuses, updatedminibuses]);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterUniqueMinibusesById = (minibuses) => {
    const uniqueMinibuses = [];
    const seenIds = new Set();

    minibuses.forEach((minibus) => {
      if (!seenIds.has(minibus.id)) {
        uniqueMinibuses.push(minibus);
        seenIds.add(minibus.id);
      }
    });

    return uniqueMinibuses;
  };

  const boxStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  return (
    <>
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
            minWidth:100,
            border: 2,
            borderColor: "divider",
            boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Tab label="Genel Sayfa" {...a11yProps(0)} />
          <Tab label="Adana Seferi" {...a11yProps(1)} />
          <Tab label="Kayseri Seferi" {...a11yProps(2)} />
          <Tab label="Saimbeyli seferi" {...a11yProps(3)} />
          <Tab label="Eklenen seferler" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box sx={boxStyles}>
            <MinibusGenel />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={boxStyles}>
            <AdanaSeferi />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box sx={boxStyles}>
            <KayseriSeferi />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={boxStyles}>
            <SaimbeyliSeferi />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Box sx={boxStyles}>
            {filterUniqueMinibusesById(minibuses).map((uniqueMinibus) => (
              <MinibusCard key={uniqueMinibus.id} minibus={uniqueMinibus} />
            ))}
          </Box>
        </TabPanel>
      </Box>
    </>
  );
}
