import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function plus(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M18 13h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 1 1 2 0v5h5a1 1 0 0 1 0 2Z"/>
    </SvgIcon>
  )
}

export default plus