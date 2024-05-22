import type { Theme } from "@mui/material";
import {
  getAccordion,
  getAppBar,
  getButtons,
  getCards,
  getChips,
} from "../components/index";

export const getComponents = (theme: Theme) => {
  return {
    components: {
      ...getAccordion(theme),
      ...getAppBar(theme),
      ...getButtons(theme),
      ...getCards(theme),
      ...getChips(theme),
    },
  };
};
