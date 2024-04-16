import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function arrowLeft(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M11.707 5.293a1 1 0 0 1 .083 1.32l-.083.094L7.414 11H19a1 1 0 0 1 .117 1.993L19 13H7.415l4.292 4.293a1 1 0 0 1-1.32 1.497l-.094-.083-6-6-.054-.058-.071-.094-.043-.07-.054-.114-.035-.105-.025-.118-.007-.058L4 12l.003-.075.017-.126.03-.111.044-.111.052-.098.064-.092c.029-.037.055-.066.083-.094l6-6a1 1 0 0 1 1.414 0Z" />
    </SvgIcon>
  )
}

export default arrowLeft