import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function CalendarPicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']}>
        <DateRangeCalendar
          // Apply top-level styling
          sx={{
            '.MuiDateRangeCalendar-root': {
              padding: '8px',
            },
          }}
          slotProps={{
            // Customize individual day cells
            day: (ownerState: any) => ({
              sx: {
                fontWeight: 500,
                borderRadius: '50%',
                width: '36px',
                height: '36px',

                // Styling for days outside the current month
                ...(ownerState.outsideCurrentMonth && {
                  color: '#ccc',
                }),

                // Styling for days within the selected range
                ...(ownerState.inRange && {
                  backgroundColor: '#d0a88b',
                  color: '#ffffff',
                }),

                // Styling for selected start/end days
                ...(ownerState.selected && {
                  backgroundColor: '#af805c',
                  color: '#ffffff',
                }),

                // Hover effect for selectable days
                '&:hover': {
                  backgroundColor: ownerState.outsideCurrentMonth
                    ? 'transparent'
                    : '#af805c',
                  color: ownerState.outsideCurrentMonth ? '#ccc' : '#ffffff',
                  cursor: ownerState.outsideCurrentMonth
                    ? 'default'
                    : 'pointer',
                },
              },
            }),

            // Customize the left arrow button
            leftArrowIcon: {
              sx: {
                color: '#af805c',
                '&:hover': {
                  backgroundColor: 'rgba(175,128,92,0.1)',
                },
              },
            },

            // Customize the right arrow button
            rightArrowIcon: {
              sx: {
                color: '#af805c',
                '&:hover': {
                  backgroundColor: 'rgba(175,128,92,0.1)',
                },
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
