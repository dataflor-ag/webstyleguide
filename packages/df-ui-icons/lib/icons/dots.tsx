import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function dots(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
    </SvgIcon>
  )
}

export default dots
