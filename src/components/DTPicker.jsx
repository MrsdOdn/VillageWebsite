import React, { useState } from "react";
import { TextField } from "@mui/material";

const DateTimePicker = ({ label, value, onDateChange }) => {
  return (
    <TextField
      label={label}
      type="datetime-local"
      value={value}
      onChange={(e) => onDateChange(e.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
      sx={{width:"100%"}}
    />
  );
};

const DTPicker = ({ onDateChange }) => {
  const [selectedDateTime, setSelectedDateTime] = useState("");

  const handleDateTimeChange = (dateTime) => {
    setSelectedDateTime(dateTime);
    onDateChange(dateTime); // Eklenen satır
  };

  return (
    <DateTimePicker
      label="Select Date and Time"
      value={selectedDateTime}
      onDateChange={handleDateTimeChange}
    />
  );
};

export default DTPicker;
