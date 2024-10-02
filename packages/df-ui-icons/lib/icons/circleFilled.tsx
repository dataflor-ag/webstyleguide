import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function circleFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
    <path d="M2,12C2,6.4771,6.4771,2,12,2c5.5228,0,10,4.4771,10,10c0,5.5228,-4.4772,10,-10,10C6.4771,22,2,17.5228,2,12z" />
    </SvgIcon>
  )
}

export default circleFilled