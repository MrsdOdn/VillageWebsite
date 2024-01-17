import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Box  from "@mui/material/Box";


export default function Layout() {
  return (
    <>
      <Header />
      <Box
        sx={{
          boxShadow: "10px 10px 20px 20px rgba(0, 0.2, 0, 0.2)",
          marginX: 5,
          padding: 2, 
          minHeight: "100vh", // Ekran yüksekliği kadar büyüyen bir konteyner
          display: "flex",
          flexDirection: "column",
        }}
      >
      <Outlet />
      </Box>
      <Footer />
    </>
  )
}
