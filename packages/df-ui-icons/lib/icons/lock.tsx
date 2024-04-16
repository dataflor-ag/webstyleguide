import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function lock(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2a5 5 0 0 1 4.995 4.783L17 7v3a3 3 0 0 1 2.995 2.824L20 13v6a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19v-6a3 3 0 0 1 2.824-2.995L7 10V7a5 5 0 0 1 5-5Zm5 10H7a1 1 0 0 0-.993.883L6 13v6a1 1 0 0 0 .883.993L7 20h10a1 1 0 0 0 .993-.883L18 19v-6a1 1 0 0 0-.883-.993L17 12Zm-5 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-10a3 3 0 0 0-2.995 2.824L9 7v3h6V7a3 3 0 0 0-3-3Z" />
    </SvgIcon>
  )
}

export default lock