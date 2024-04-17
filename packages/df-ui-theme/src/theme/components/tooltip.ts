import { Components, Theme } from "@mui/material";
import { palette } from "..";
import { radius } from "../shape";
// import { customShadows } from "../shadows";

const styles: Components<Omit<Theme, "components">> = {
  MuiTooltip: {
    defaultProps: {},
    styleOverrides: {
      tooltip: {
        backgroundColor: palette.grey?.[900],
        borderRadius: radius.md,
        fontWeight: 600,
        padding: "0.1875rem 0.75rem",
        "&.MuiTooltip-tooltipPlacement": {
          "&Bottom": {
            marginTop: "0.625rem !important",
          },
          "&Top": {
            marginBottom: "0.625rem !important",
          },
          "&Left": {
            marginRight: "0.625rem !important",
          },
          "&Right": {
            marginLeft: "0.625rem !important",
          },
        },
      },
    },
  },
};

export default styles;
