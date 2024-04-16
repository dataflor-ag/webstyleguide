import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function mail(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M2 17V6.962a3 3 0 0 1 2.825-2.957L5 4h14a3 3 0 0 1 2.995 2.824L22 7v10a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17Zm18-8.132-7.445 4.964a1 1 0 0 1-.994.066l-.116-.066L4 8.87V17a1 1 0 0 0 .883.993L5 18h14a1 1 0 0 0 .993-.883L20 17V8.868ZM19 6H5a1 1 0 0 0-.888.539L12 11.797l7.888-5.258a1 1 0 0 0-.761-.531L19 6Z" />
    </SvgIcon>
  )
}

export default mail
