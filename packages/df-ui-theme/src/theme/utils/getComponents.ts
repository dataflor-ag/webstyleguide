import type { Theme } from "@mui/material"
import { getButtons, getCards } from "../components/index"

export const getComponents = (theme: Theme) => {
  return {
    components: {
      ...getButtons(theme),
      ...getCards(theme),
    },
  }
}
