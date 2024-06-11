import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon"

function clock(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2a1 1 0 0 1 .993.883L13 6.062v5.523l2.707 2.708a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-3-3a1 1 0 0 1-.284-.576L11 12V6.006l.005.068c.051.32.477-.074.995-.074Z" />
    </SvgIcon>
  )
}

export default clock
