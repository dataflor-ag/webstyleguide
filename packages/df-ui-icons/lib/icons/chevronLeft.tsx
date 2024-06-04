import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function chevronLeft(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M13.293 5.293a1 1 0 0 1 1.497 1.32l-.083.094L9.415 12l5.292 5.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-6-6a1 1 0 0 1-.083-1.32l.083-.094 6-6Z" />
    </SvgIcon>
  )
}

export default chevronLeft