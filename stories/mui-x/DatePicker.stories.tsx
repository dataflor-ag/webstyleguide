import React from "react";
import { Typography } from "@mui/material"
import { LocalizationProvider, DatePicker, DateCalendar, TimePicker } from '@mui/x-date-pickers'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "MUI X/DateTimePicker",
};

export default meta;

export function _DateTimePicker() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography variant="h2" mb={4} mt={8}>
          DateTimePicker
        </Typography>
        <Typography variant="h3" mb={4} mt={8}>
          DatePicker
        </Typography>
        <DatePicker label="Basic date picker" />
        <Typography variant="h3" mb={4} mt={8}>
          TimePicker
        </Typography>
        <TimePicker label="Basic time picker" />
        <Typography variant="h3" mb={4} mt={8}>
          DateRangePicker (Pro)
        </Typography>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          name="allowedRange"
        />
      </LocalizationProvider>
    </div>
  );
}