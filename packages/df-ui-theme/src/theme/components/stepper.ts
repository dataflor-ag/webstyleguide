import { Components, Theme } from "@mui/material"
import theme, { palette } from "../index"

// TODO: Own icon
// TODO: Cant use custom icon
// import { radioButtonIcon } from "../utils/radioButton"
// import { checkboxIcon } from "../utils/checkbox"

const Styles: Components<Omit<Theme, "components">> = {
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
          color: theme.palette.grey?.[500],
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
        color: "white",
        border: `1px solid ${palette.grey?.[200]}`,
        borderRadius: "50%",
        "&.Mui-active": {
          color: `${palette.grey?.[900]}`,
          borderColor: "transparent",

          "& .MuiStepIcon-text": {
            fill: "white",
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
}

export default Styles
