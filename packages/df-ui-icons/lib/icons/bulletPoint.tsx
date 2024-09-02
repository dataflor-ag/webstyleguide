import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function bulletPoint (props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
       <circle cx="12" cy="12" r="4.5"/>
    </SvgIcon>
  )
}

export default  bulletPoint