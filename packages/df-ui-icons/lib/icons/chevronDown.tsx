import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function chevronDown(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M5.293 8.293a1 1 0 0 1 1.32-.083l.094.083L12 13.585l5.293-5.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-6 6a1 1 0 0 1-1.32.083l-.094-.083-6-6a1 1 0 0 1 0-1.414Z" />
    </SvgIcon>
  )
}

export default chevronDown