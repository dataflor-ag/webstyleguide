import { Components, Theme } from "@mui/material"

import grid from "./components/grid"
import button from "./components/button"
import card from "./components/card"
import avatar from "./components/avatar"
import dialog from "./components/dialog"
import container from "./components/container"
import appBar from "./components/appBar"
import pagination from "./components/pagination"
import menu from "./components/menu"
import form from "./components/form"
import toggleButton from "./components/toggleButton"
import select from "./components/select"
import checkbox from "./components/checkbox"
import radio from "./components/radio"
import switchToggle from "./components/switchToggle"
import tabs from "./components/tabs"
import chip from "./components/chip"
import divider from "./components/divider"
import drawer from "./components/drawer"
import icon from "./components/icon"
import tooltip from "./components/tooltip"
import accordion from "./components/accordion"

const components: Components<Omit<Theme, "components">> = {
  ...grid,
  ...button,
  ...form,
  ...card,
  ...avatar,
  ...dialog,
  ...container,
  ...appBar,
  ...pagination,
  ...menu,
  ...select,
  ...checkbox,
  ...tabs,
  ...toggleButton,
  ...radio,
  ...switchToggle,
  ...chip,
  ...divider,
  ...drawer,
  ...icon,
  ...tooltip,
  ...accordion,
}

export default components
