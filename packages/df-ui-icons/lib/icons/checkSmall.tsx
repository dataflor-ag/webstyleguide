import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function checkSmall(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M16.276 8.31a1 1 0 0 1 1.448 1.38l-6.667 7a1 1 0 0 1-1.448 0l-3.333-3.5a1 1 0 0 1 1.448-1.38l2.609 2.74 5.943-6.24Z" />
    </SvgIcon>
  )
}

export default checkSmall