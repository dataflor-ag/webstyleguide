import type { SvgIconProps } from "@mui/material/SvgIcon";
import home from "./home";
import close from "./close";
import mail from "./mail";
import user from "./user";
import lock from "./lock";
import lockOpen from "./lockOpen";
import key from "./key";
import eye from "./eye";
import eyeOff from "./eyeOff";
import check from "./check";
import arrowLeft from "./arrowLeft";
import plus from "./plus";
import settings from "./settings";
import headset from "./headset";
import bell from "./bell";
import search from "./search";
import calendar from "./calendar";
import chevronDown from "./chevronDown";
import chevronRight from "./chevronRight";
import logout from "./logout";
import dots from "./dots";
import star from "./star";
import starFilled from "./starFilled";
import trash from "./trash";
import pencil from "./pencil";
import alertTriangle from "./alertTriangle";
import sort from "./sort";
import adjustments from "./adjustments";
import fileText from "./fileText";
import circleDot from "./circleDot";
import layoutGrid from "./layoutGrid";
import list from "./list";
import map from "./map";
import cloudDownload from "./cloudDownload";
import cloudUpload from "./cloudUpload";
import checkSmall from "./checkSmall";
import closeSmall from "./closeSmall";
import clock from "./clock";
import addCircle from "./addCircle";
import attach from "./attach";
import bill from "./bill";
import arrowUp from "./arrowUp";
import arrowDown from "./arrowDown";
import arrowRight from "./arrowRight";
import calendarSelectDay from "./calendarSelectDay";
import chevronLeft from "./chevronLeft";
import chevronUp from "./chevronUp";
import circleHalfFilled from "./circleHalfFilled";
import createNew from "./createNew";
import databaseExport from "./databaseExport";
import databaseImport from "./databaseImport";
import documentEdit from "./documentEdit";
import documentEditText from "./documentEditText";
import file from "./file";
import fileRename from "./fileRename";
import filesCopy from "./filesCopy";
import folderEmpty from "./folderEmpty";
import imageSymbol from "./imageSymbol";
import imageMultiple from "./imageMultiple";
import link from "./link";
import locationMarker from "./locationMarker";
import share from "./share";
import symbolEmail from "./symbolEmail";
import tag from "./tag";
import tagMultiple from "./tagMultiple";
import closeBold from "./closeBold";
import exclamation from "./exclamationBold";
import exclamationBold from "./exclamation";
import fileImage from "./fileImage";
import folderData from "./folderData";
import plusBold from "./plusBold";
import removeCircle from "./removeCircle";
import folderOpen from "./folderOpen";
import folderImage from "./folderImage";
import fileData from "./fileData";
import arrowUpRight from "./arrowUpRight";
import arrowDownRight from "./arrowDownRight";
import arrowDownLeft from "./arrowDownLeft";
import arrowUpLeft from "./arrowUpLeft";
import userGroup from "./userGroup";
import pointsLine from "./pointsLine";
import pointsLoose from "./pointsLoose";
import pointsWeb from "./pointsWeb";
import imageEdit from "./imageEdit";
import mobile from "./mobile";
import mobileAppOk from "./mobileAppOk";
import mobileText from "./mobileText";
import pointsCircle from "./pointsCircle";
import userTeam from "./userTeam";
import userCloud from "./userCloud";
import employee from "./employee";
import employeeGroup from "./employeeGroup";
import userOnline from "./userOnline";
import measure from "./measure";
import folderAttach from "./folderAttach";
import fileAttach from "./fileAttach";
import creditcard from "./creditcard";
import company from "./company";
import checkCircle from "./checkCircle";
import appSecurity from "./appSecurity";
import filePaper from "./filePaper";
import gears from "./gears";
import invoice from "./invoice";
import pin from "./pin";
import refresh from "./refresh";
import status from "./status";
import task from "./task";
import update from "./update";
import bulletPoint from "./bulletPoint";
import addressBook from "./addressBook";
import locationCircle from "./locationCircle";
import locationMap from "./locationMap";
import digger from "./digger";
import diggerEdit from "./diggerEdit";
import filter from "./filter";
import sun from "./sun";
import listMoreItems from "./listMoreItems";
import circleFilled from "./circleFilled";
import sunFilled from "./sunFilled";
import circle from "./circle";
import info from "./info";
import account from "./account";
import questionCircle from "./questionCircle";
import customerGroup from "./customerGroup";
import shieldSafe from "./shieldSafe";

type IconElement = (props: SvgIconProps) => JSX.Element;

const icons = {
  home,
  company,
  mail,
  exclamation,
  exclamationBold,
  symbolEmail,
  close,
  closeBold,
  user,
  userCloud,
  userOnline,
  userGroup,
  userTeam,
  employee,
  employeeGroup,
  customerGroup,
  lock,
  lockOpen,
  key,
  eye,
  eyeOff,
  check,
  checkSmall,
  plus,
  plusBold,
  settings,
  headset,
  bell,
  search,
  calendar,
  chevronUp,
  calendarSelectDay,
  chevronDown,
  chevronLeft,
  chevronRight,
  logout,
  dots,
  star,
  starFilled,
  trash,
  pencil,
  createNew,
  alertTriangle,
  sort,
  adjustments,
  databaseExport,
  databaseImport,
  documentEdit,
  documentEditText,
  fileText,
  file,
  fileImage,
  fileData,
  fileRename,
  filePaper,
  fileAttach,
  filesCopy,
  folderEmpty,
  folderOpen,
  folderData,
  folderImage,
  folderAttach,
  circleDot,
  circleHalfFilled,
  layoutGrid,
  list,
  listMoreItems,
  map,
  locationMarker,
  locationCircle,
  locationMap,
  imageSymbol,
  imageMultiple,
  imageEdit,
  cloudDownload,
  cloudUpload,
  closeSmall,
  clock,
  addCircle,
  removeCircle,
  checkCircle,
  attach,
  link,
  share,
  bill,
  invoice,
  arrowUp,
  arrowUpRight,
  arrowRight,
  arrowDownRight,
  arrowDown,
  arrowDownLeft,
  arrowLeft,
  arrowUpLeft,
  tag,
  tagMultiple,
  pointsLine,
  pointsLoose,
  pointsWeb,
  pointsCircle,
  mobile,
  mobileAppOk,
  mobileText,
  appSecurity,
  measure,
  creditcard,
  gears,
  pin,
  refresh,
  update,
  status,
  task,
  bulletPoint,
  addressBook,
  digger,
  diggerEdit,
  filter,
  sun,
  sunFilled,
  circle,
  circleFilled,
  info,
  account,
  questionCircle,
  shieldSafe,
};

type IconKeys = keyof typeof icons;
type Icons = Record<IconKeys, IconElement>;

export default icons as Icons;
