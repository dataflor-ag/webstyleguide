import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function search(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M11 3a8 8 0 0 1 6.32 12.905l3.387 3.388a1 1 0 0 1-1.32 1.497l-.094-.083-3.388-3.386A8 8 0 1 1 11 3Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
    </SvgIcon>
  )
}

export default search