import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function chevronRight(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M8.293 5.293a1 1 0 0 1 1.32-.083l.094.083 6 6a1 1 0 0 1 .083 1.32l-.083.094-6 6a1 1 0 0 1-1.497-1.32l.083-.094L13.585 12 8.293 6.707a1 1 0 0 1-.083-1.32l.083-.094Z" />
    </SvgIcon>
  )
}

export default chevronRight