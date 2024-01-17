import React, { useState } from 'react';
import { Container, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const [displayedDate, setDisplayedDate] = useState(currentDate);

  const handlePrevMonth = () => {
    const newDate = new Date(displayedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setDisplayedDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(displayedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setDisplayedDate(newDate);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(displayedDate.getMonth(), displayedDate.getFullYear());
    const firstDayOfWeek = getFirstDayOfMonth(displayedDate.getMonth(), displayedDate.getFullYear());

    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null); // Boş günler ekleniyor
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(displayedDate.getFullYear(), displayedDate.getMonth(), i));
    }

    return days;
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        MUI Calendar App
      </Typography>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <IconButton onClick={handlePrevMonth}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant="h5">{displayedDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</Typography>
        <IconButton onClick={handleNextMonth}>
          <ChevronRightIcon />
        </IconButton>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {daysOfWeek.map((day, index) => (
                <TableCell key={index}>{day}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {generateCalendarDays().map((day, index) => (
              <TableCell key={index} align="center" style={{ backgroundColor: day && day.getDate() === currentDate.getDate() ? '#ffcccb' : 'white' }}>
                {day && day.getDate()}
              </TableCell>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};


export default Calendar;
