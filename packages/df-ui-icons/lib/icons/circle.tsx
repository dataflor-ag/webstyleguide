import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function circle(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
    <path d="M12,3.5c-4.6944,0,-8.5,3.8056,-8.5,8.5c0,4.6944,3.8056,8.5,8.5,8.5c4.6944,0,8.5,-3.8056,8.5,-8.5C20.5,7.3056,16.6944,3.5,12,3.5zM2,12C2,6.4771,6.4771,2,12,2c5.5228,0,10,4.4771,10,10c0,5.5228,-4.4772,10,-10,10C6.4771,22,2,17.5228,2,12z"/>
    </SvgIcon>
  )
}

export default circle