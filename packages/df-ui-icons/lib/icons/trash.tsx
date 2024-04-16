import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function trash(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M14 2a2 2 0 0 1 1.995 1.85L16 4v2h4a1 1 0 0 1 .117 1.993L20 8h-.081L19 19a3 3 0 0 1-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 0 1-.117-1.993L4 6h4V4a2 2 0 0 1 1.85-1.995L10 2h4Zm3.913 6H6.086L7 19a1 1 0 0 0 .883.993L8 20h8c.515 0 .94-.39.997-.959l.006-.124L17.913 8ZM10 10a1 1 0 0 1 .993.883L11 11v6a1 1 0 0 1-1.993.117L9 17v-6a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 .993.883L15 11v6a1 1 0 0 1-1.993.117L13 17v-6a1 1 0 0 1 1-1Zm0-6h-4v2h4V4Z" />
    </SvgIcon>
  )
}

export default trash