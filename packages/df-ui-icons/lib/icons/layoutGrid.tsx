import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function layoutGrid(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 2v4H5V5h4Zm10-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 2v4h-4V5h4ZM9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm0 2v4H5v-4h4Zm10-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm0 2v4h-4v-4h4Z" />
    </SvgIcon>
  )
}

export default layoutGrid