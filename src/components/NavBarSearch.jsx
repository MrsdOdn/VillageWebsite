import React from "react";
import { IconButton } from "@mui/material";
import { Box, Input } from "@mui/joy";

import SearchIcon from "@mui/icons-material/Search";

function NavBarSearch({ handleOpen }) {
  return (
    <div>
      <Box
        component="form"
        noValidate //arayıcı tarafından varsayılan doğrulama işlemlerini devre dışı bırakır.
        autoComplete="off" //Tarayıcının daha önce girilen değerleri önermesini önler.
        margin={1}
      >
        <Input
          fullWidth
          color="warning"//tıklandığındaki kenar rengi
          placeholder="Search"
          type="search"
          name="search"
          variant="inherit"
          size="lg"
          endDecorator={
            <IconButton color="#AA8B56" onClick={handleOpen}>
              <SearchIcon />
            </IconButton>
          }
          sx={{
            "--Input-paddingInline": "10px",
            ml: "auto",
            display: { md: "flex" },
            borderColor: "#AA8B56",
          }}
        />
      </Box>
    </div>
  );
}

export default NavBarSearch;
