import type { Theme } from "@mui/material"
import type { ComponentStyles } from "../types/Components"
import { getShadow } from "../utils/getShadows"
import { radius } from "../tokens/shape"
import Icon from "@dataflor-ag/df-ui-icons"
import datePickerActionBar from "../composables/datePickerActionBar"

export const getDateTime = (theme: Theme): ComponentStyles => {
  const { palette } = theme
  const isLightMode = palette.mode === "light"

  return {
    MuiPickersLayout: {
      styleOverrides: {
        root: {
          display: "block",
          ".datePickerActionBar": {
            borderTop: `1px solid ${palette.grey[200]}`,
            gridColumn: "1 / 4",
            gridRow: "3",
            display: "flex",
            padding: "1rem 1.25rem",
            gap: "0.75rem",
            button: {
              width: "50%",
            },
          },
          ".MuiTimePickerToolbar-root": {
            gridColumn: "1",
            gridRow: "1",
            margin: 0,
            padding: "1.5rem",
            ".MuiTypography-overline": {
              marginBottom: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: `${palette.grey?.[700]}`,
              textTransform: "none",
              lineHeight: "unset" 
            },
            ".MuiTimePickerToolbar-separator": {
              margin: "0 0.5rem",
            },
            ".MuiTimePickerToolbar-hourMinuteLabel": {
              alignItems: "center",
              width: "75%",
              button: {
                height: "3.5rem",
                borderRadius: radius.md,
                padding: "0",
                width: "100%",
                backgroundColor: isLightMode? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)",
              },
            },
            ".MuiTimePickerToolbar-ampmSelection": {
              margin: 0,
              width: "25%",
            },
          },
          ".MuiTimeClock-root": {
            ".MuiPickersArrowSwitcher-root": {
              display: "none",
            },
            ".MuiClock-root": {
              margin: 0,
              padding: "1.5rem",
              ".MuiClock-clock": {
                backgroundColor: isLightMode? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)",
              },
            },
          },
          ".MuiMultiSectionDigitalClock-root": {
            borderBottom: "0 none",
            ul: {
              padding: "0.5rem",
              width: "33.333%",
              // margin: "0.25rem 0",
              "&:after": {
                height: "calc(100% - 40px)",
              },
              li: {
                height: "2.5rem",
                padding: "0 0.75rem",
                margin: "0.25rem 0",
                minHeight: "auto",
                width: "100%",
                "&:hover": {
                  backgroundColor: isLightMode? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)",
                },
                "&.Mui-selected": {
                  "&:hover": {
                    backgroundColor: palette.primary[600],
                  }
                },
              },
            },
          },
        },
        contentWrapper: {
          gridColumn: "1",
          gridRow: "2",
        },
      },
    },
    // Time
    MuiTimePicker: {
      defaultProps: {
        orientation: "portrait",
        slots: {
          openPickerIcon: Icon.clock,
          actionBar: datePickerActionBar,
        },
        slotProps: {
          actionBar: {
            actions: ['cancel', 'accept'],
          },
        },
      },
    },
    // Date (Mobile)
    MuiMobileDatePicker: {
      defaultProps: {
        orientation: "portrait",
        slotProps: {
          toolbar: {
            hidden: true,
          },
        },
      },
    },
    // Date (Desktop)
    MuiDatePicker: {
      defaultProps: {
        closeOnSelect: false,
        orientation: "portrait",
        slots: {
          openPickerIcon: Icon.calendar,
          actionBar: datePickerActionBar,
        },
        slotProps: {
          actionBar: {
            actions: ['cancel', 'accept'],
          },
          toolbar: {
            hidden: true,
          },
        }
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        root: {
          marginTop: "0.5rem !important",
        },
        paper: {
          overflow: "hidden",
          backgroundColor: isLightMode
            ? palette.surface[0]
            : palette.surface[50],
          boxShadow: getShadow(palette.mode)["2xl"].base,
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          padding: "0 1.25rem",
          marginTop: "1.25rem",
          marginBottom: "0.75rem",
        },
        labelContainer: {
          position: "relative",
          zIndex: "1",
          margin: "0",
          ".MuiPickersCalendarHeader-switchViewButton": {
            display: "none",
          },
        },
        label: {
          fontWeight: "500",
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        header: {
          gap: "0.125rem",
        },
        weekDayLabel: {
          fontSize: "0.75rem",
          fontWeight: "500",
          color: palette.grey[600],
          width: "2.5rem",
          height: "2.5rem",
          margin: 0,
        },
        weekContainer: {
          gap: "0.125rem",
          ".MuiPickersDay-root": {
            fontSize: "0.875rem",
            color: palette.grey[700],
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "0.5rem",
            margin: 0,
            "&:hover": {
              backgroundColor: isLightMode? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)",
            },
            "&.MuiPickersDay-dayOutsideMonth": {
              color: palette.grey[400],
            },
            "&.Mui-selected": {
              fontWeight: "500",
              backgroundColor: palette.primary[500] + "!important",
              color: "white",
            },
            "&.MuiPickersDay-today": {
              borderColor: palette.grey[200],
              backgroundColor: "transparent !important",
            }
          },
        },
      },
    },
    MuiPickersArrowSwitcher: {
      defaultProps: {
        slots: {
          rightArrowIcon: Icon.chevronRight,
          leftArrowIcon: Icon.chevronLeft,
        },
      },
      styleOverrides: {
        root: {
          justifyContent: "space-between",
          position: "absolute",
          left: "1.25rem",
          right: "1.25rem",
        },
      },
    },
    MuiDateCalendar: {
      defaultProps: {
        showDaysOutsideCurrentMonth: true,
      },
      styleOverrides: {
        root: {
          height: "auto",
          maxHeight: "none",
          width: "20.5rem"
        },
        viewTransitionContainer: {
          ".MuiPickersSlideTransition-root": {
            minHeight: "17rem",
          },
        },
      },
    },
  }
}