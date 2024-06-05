import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function circleHalfFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
    <path d="M2.0277,11.25C2.4112,6.0774,6.7294,2,12,2c5.2706,0,9.5888,4.0774,9.9723,9.25H22v0.75c0,5.5228,-4.4772,10,-10,10c-5.5229,0,-10,-4.4772,-10,-10v-0.75H2.0277zM12,3.5c-4.4417,0,-8.0877,3.4069,-8.4674,7.75h16.9348C20.0877,6.9069,16.4417,3.5,12,3.5z" />
    </SvgIcon>
  )
}

export default circleHalfFilled