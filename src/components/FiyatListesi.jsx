import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const FiyatListesi = ({ fiyatlar }) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Rota</strong></TableCell>
            <TableCell align="right"><strong>Fiyat (TL)</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fiyatlar.map((fiyat, index) => (
            <TableRow key={index}>
              <TableCell>{fiyat.rota}</TableCell>
              <TableCell align="right">{fiyat.fiyat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FiyatListesi;
