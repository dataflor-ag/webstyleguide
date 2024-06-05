import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function dots(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
    <path d="M13,11.5c0,0.8284,-0.6716,1.5,-1.5,1.5s-1.5,-0.6716,-1.5,-1.5s0.6716,-1.5,1.5,-1.5S13,10.6716,13,11.5zM17.5,10c-0.8284,0,-1.5,0.6716,-1.5,1.5s0.6716,1.5,1.5,1.5s1.5,-0.6716,1.5,-1.5S18.3284,10,17.5,10zM5.5,10c-0.8284,0,-1.5,0.6716,-1.5,1.5s0.6716,1.5,1.5,1.5s1.5,-0.6716,1.5,-1.5S6.3284,10,5.5,10z" />
    </SvgIcon>
  )
}

export default dots
