import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function pencil(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M19.207 4.793a3.829 3.829 0 0 1 .15 5.256l-.15.158-10.5 10.5a1 1 0 0 1-.576.284L8 21H4a1 1 0 0 1-.993-.883L3 20v-4a1 1 0 0 1 .206-.608l.087-.1 10.5-10.5a3.828 3.828 0 0 1 5.414 0ZM13.5 7.913 5 16.415V19h2.584l8.501-8.5-2.586-2.586Zm1.831-1.818-.123.112-.293.293 2.585 2.585.294-.292a1.829 1.829 0 0 0 .112-2.463l-.112-.123a1.829 1.829 0 0 0-2.463-.112Z" />
    </SvgIcon>
  )
}

export default pencil
