import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

function closeSmall(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M8.707 7.293 12 10.585l3.293-3.292a1 1 0 1 1 1.414 1.414L13.415 12l3.292 3.293a1 1 0 1 1-1.414 1.414L12 13.415l-3.293 3.292a1 1 0 1 1-1.414-1.414L10.585 12 7.293 8.707a1 1 0 1 1 1.414-1.414Z" />
    </SvgIcon>
  );
}

export default closeSmall;
