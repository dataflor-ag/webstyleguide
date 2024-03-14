import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps,
} from "@mui/material"

// type AvatarSize = "xs" | "sm" | "lg" | "xl"

export interface AvatarProps extends MuiAvatarProps {
  label?: string
  // size?: AvatarSize
}

export const Avatar = ({ label, ...rest }: AvatarProps) => (
  <MuiAvatar {...rest}>{label}</MuiAvatar>
)
