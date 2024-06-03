import React from "react";
import { Typography } from "@mui/material"
import { LocalizationProvider, DatePicker, DateCalendar } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "MUI X/DateTime",
};

export default meta;

export function _DatePicker() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography variant="h2" mb={4} mt={8}>
          DateTime
        </Typography>
        <DatePicker label="Basic date picker" />
        <DateCalendar />
      </LocalizationProvider>
    </div>
  );
}

export function _DateCalender() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography variant="h2" mb={4} mt={8}>
          Date Calender
        </Typography>
        <DateCalendar />
      </LocalizationProvider>
    </div>
  );
}
