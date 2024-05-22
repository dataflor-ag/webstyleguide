import type { Theme } from "@mui/material"
import {
  getAppBar,
  getAvatars,
  getButtons,
  getCards,
  getChips,
} from "../components/index"

export const getComponents = (theme: Theme) => {
  return {
    components: {
      ...getAppBar(theme),
      ...getButtons(theme),
      ...getCards(theme),
      ...getChips(theme),
      ...getAvatars(theme),
    },
  }
}
