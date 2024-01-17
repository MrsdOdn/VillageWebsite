import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function BazaarLayout() {
  const boxStyles = {
    marginTop: 3,
    backgroundColor: "#CEDEBD",
    boxShadow: "10px 10px 20px 20px rgba(0, 0.2, 0, 0.2)",
    padding: 2,
    minHeight: "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <Box sx={boxStyles}>
        <Outlet />
      </Box>
    </>
  );
}
