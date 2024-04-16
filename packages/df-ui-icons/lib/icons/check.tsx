import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function check(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M19.293 6.293a1 1 0 0 1 1.497 1.32l-.083.094-10 10a1 1 0 0 1-1.32.083l-.094-.083-5-5a1 1 0 0 1 1.32-1.497l.094.083L10 15.585l9.293-9.292Z" />
    </SvgIcon>
  )
}

export default check