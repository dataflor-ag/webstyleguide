import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function user(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M14 14a5 5 0 0 1 4.995 4.783L19 19v2a1 1 0 0 1-1.993.117L17 21v-2a3 3 0 0 0-2.824-2.995L14 16h-4a3 3 0 0 0-2.995 2.824L7 19v2a1 1 0 0 1-1.993.117L5 21v-2a5 5 0 0 1 4.783-4.995L10 14h4ZM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </SvgIcon>
  )
}

export default user
