import type { Theme } from "@mui/material";
import {
  getAccordion,
  getAppBar,
  getButtons,
  getCards,
  getChips,
  getAvatars,
  getDialogs,
  getDividers,
  getDrawers,
  getMenus,
  getForms,
  getSelects,
  getCheckboxes,
  getRadios,
  getSwitchToggle,
  getTabs,
} from "../components/index";

export const getComponents = (theme: Theme) => {
  return {
    components: {
      ...getAccordion(theme),
      ...getAppBar(theme),
      ...getButtons(theme),
      ...getCards(theme),
      ...getChips(theme),
      ...getAvatars(theme),
      ...getDialogs(theme),
      ...getDividers(theme),
      ...getDrawers(theme),
      ...getMenus(theme),
      ...getForms(theme),
      ...getSelects(theme),
      ...getCheckboxes(theme),
      ...getRadios(theme),
      ...getSwitchToggle(theme),
      ...getTabs(theme),
    },
  };
};
