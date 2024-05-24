import type { SvgIconProps } from "@mui/material/SvgIcon"
import home from "./home"
import close from "./close"
import mail from "./mail"
import user from "./user"
import lock from "./lock"
import lockOpen from "./lockOpen"
import key from "./key"
import eye from "./eye"
import check from "./check"
import arrowLeft from "./arrowLeft"
import plus from "./plus"
import settings from "./settings"
import headset from "./headset"
import bell from "./bell"
import search from "./search"
import calendar from "./calendar"
import chevronDown from "./chevronDown"
import logout from "./logout"
import dots from "./dots"
import star from "./star"
import starFilled from "./starFilled"
import trash from "./trash"
import pencil from "./pencil"
import alertTriangle from "./alertTriangle"
import sort from "./sort"
import adjustments from "./adjustments"
import fileText from "./fileText"
import circleDot from "./circleDot"
import layoutGrid from "./layoutGrid"
import list from "./list"
import map from "./map"
import cloudDownload from "./cloudDownload"
import cloudUpload from "./cloudUpload"
import checkSmall from "./checkSmall"
import closeSmall from "./closeSmall"

type IconElement = (props: SvgIconProps) => JSX.Element;

const icons = {
  home,
  mail,
  close,
  user,
  lock,
  lockOpen,
  key,
  eye,
  check,
  arrowLeft,
  plus,
  settings,
  headset,
  bell,
  search,
  calendar,
  chevronDown,
  logout,
  dots,
  star,
  starFilled,
  trash,
  pencil,
  alertTriangle,
  sort,
  adjustments,
  fileText,
  circleDot,
  layoutGrid,
  list,
  map,
  cloudDownload,
  cloudUpload,
  checkSmall,
  closeSmall,
}

type IconKeys = keyof typeof icons;
type Icons = Record<IconKeys, IconElement>;

export default icons as Icons
