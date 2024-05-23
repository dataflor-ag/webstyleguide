import type { Theme } from "@mui/material";
import type { ComponentStyles } from "../types/Components";

// TODO: Own icon
// TODO: Cant use custom icon
// import { radioButtonIcon } from "../utils/radioButton"
// import { checkboxIcon } from "../utils/checkbox"

export const getStepper = (theme: Theme): ComponentStyles => {
  const { palette } = theme;
  // const isLightMode = palette.mode === "light";

  return {
    MuiStepper: {
      defaultProps: {},
      styleOverrides: {
        root: () => ({
          // backgroundColor: "purple",
        }),
      },
    },
    MuiStepLabel: {
      defaultProps: {
        // StepIconComponent: radioButtonIcon,
      },
      styleOverrides: {
        root: () => ({
          // backgroundColor: "pink",
          // color: "pink",
          "&.Mui-active": {
            backgroundColor: "blue",
          },
        }),
        label: () => ({
          color: theme.palette.grey?.[500],
          "&.Mui-active": {
            color: theme.palette.grey?.[700],
          },
        }),
        iconContainer: {
          // backgroundColor: "orange",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: () => ({
          borderColor: theme.palette.grey?.[200],
        }),
      },
    },
    MuiStepIcon: {
      defaultProps: {
        // icon: checkboxIcon,
        // icon: checkboxIcon,
      },
      styleOverrides: {
        root: () => ({
          color: palette.surface[0],
          border: `1px solid ${palette.grey?.[200]}`,
          borderRadius: "50%",
          "&.Mui-active": {
            color: `${palette.grey?.[900]}`,
            borderColor: "transparent",
            "& .MuiStepIcon-text": {
              fill: palette.surface[0],
            },
          },
          "&.Mui-completed": {
            color: `${palette.success?.[500]}`,
            borderColor: "transparent",
          },
        }),
        text: () => ({
          fill: `${palette.grey?.[500]}`,
          fontWeight: "600",
        }),
        active: () => ({
          backgroundColor: "pink",
        }),
        completed: () => ({
          backgroundColor: "yellow",
        }),
      },
    },
  };
};
