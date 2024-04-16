import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function circleDot(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142Zm1.414 1.414a8 8 0 1 0 11.314 11.314A8 8 0 0 0 6.343 6.343ZM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
    </SvgIcon>
  )
}

export default circleDot