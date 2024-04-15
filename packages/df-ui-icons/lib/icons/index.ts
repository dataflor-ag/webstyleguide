import type { SvgIconProps } from "@mui/material/SvgIcon"
import home from "./home"
import close from "./close"
import mail from "./mail"

export type IconElement = (props: SvgIconProps) => JSX.Element
type Icons = Record<string, IconElement>

const icons: Icons = {
  mail,
  close,
  home,
}

export default icons
