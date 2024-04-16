import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function close(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="m6.613 5.21.094.083L12 10.585l5.293-5.292a1 1 0 0 1 1.497 1.32l-.083.094L13.415 12l5.292 5.293a1 1 0 0 1-1.32 1.497l-.094-.083L12 13.415l-5.293 5.292a1 1 0 0 1-1.497-1.32l.083-.094L10.585 12 5.293 6.707a1 1 0 0 1 1.32-1.497Z" />
    </SvgIcon>
  )
}

export default close
