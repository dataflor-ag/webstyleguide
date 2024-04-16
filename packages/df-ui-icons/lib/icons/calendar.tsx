import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function calendar(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M16 2a1 1 0 0 1 .993.883L17 3v1h1a3 3 0 0 1 2.995 2.824L21 7v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1.993-.117L9 3v1h6V3a1 1 0 0 1 1-1Zm3 10H5v7a1 1 0 0 0 .883.993L6 20h12a1 1 0 0 0 1-1v-7ZM7 6H6a1 1 0 0 0-1 1v3h14V7a1 1 0 0 0-.883-.993L18 6h-1v1a1 1 0 0 1-1.993.117L15 7V6H9v1a1 1 0 0 1-1.993.117L7 7V6Z" />
    </SvgIcon>
  )
}

export default calendar