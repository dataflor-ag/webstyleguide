import React from "react"
import { Box, LinearProgress, Stack, Tooltip, Typography } from "@mui/material"
import { styled, type SxProps } from "@mui/material/styles"
import { Mime } from "mime"
import colorMapping from "./ColorMapping"

import standardTypes from "mime/types/standard.js"
import otherTypes from "mime/types/other.js"

const mime = new Mime(standardTypes, otherTypes)
mime.define({ "application/las": ["las"] })

type UploadboxIconTextProps = {
  mimeType: string;
};

interface UploadboxProps {
  title: string;
  mime: string;
  uploadedDataSize: string;
  filesize: string;
  uploadPercentage: number;
  sx?: SxProps
  maxWidthTitle?: string,
  tooltip?: boolean,
  onlyProgress?: boolean,
  boxWidth?: string,
  hideDataSize?: boolean,
  hidePercentage?: boolean,
}

const UploadboxRoot = styled("div", {
  name: "MuiUploadbox",
  slot: "root",
})(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  gap: "0.75rem",
  margin: "1rem 0",
  ".MuiTypography-subtitle2": {
    color: `${theme.palette.grey[800]}`,
  },
  ".MuiTypography-body2": {
    color: `${theme.palette.grey[500]}`,
  },
}))

const UploadboxIcon = styled("div", {
  name: "MuiUploadbox",
  slot: "icon",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  lineHeight: 0,
  width: "2.5rem",
  height: "2.5rem",
  stroke: `${theme.palette.grey[200]}`,
}))

const UploadboxIconText = styled("div", {
  name: "MuiUploadbox",
  slot: "iconText",
})<UploadboxIconTextProps>(({ mimeType }) => ({
  fontFamily: "inherit",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: "0.625rem",
  bottom: "6px",
  borderRadius: "0.25rem",
  textAlign: "center",
  position: "absolute",
  letterSpacing: "-0.1px",
  left: 0,
  height: "1rem",
  lineHeight: "1rem",
  padding: "0 0.25rem",
  ...(!!mimeType && {
    color: colorMapping(mimeType).color,
    backgroundColor: colorMapping(mimeType).backgroundColor,
  }),
}))


export const Uploadbox = React.forwardRef<HTMLDivElement, UploadboxProps>(
  (props, ref) => {
    const mimeType = mime.getType(props.mime)
    const extType = mime.getExtension(mimeType!)

    return (
      <UploadboxRoot sx={{...props.sx, width: props.boxWidth ? props.boxWidth : "auto"}} ref={ref}>
      {!props.onlyProgress || props.onlyProgress === undefined ?
      <UploadboxIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40">
            <g fill="none" fillRule="evenodd">
              <path
                strokeWidth="1.5"
                d="M16.515.75a5.25 5.25 0 0 1 3.712 1.538l9.485 9.485a5.25 5.25 0 0 1 1.538 3.712V34c0 1.45-.588 2.762-1.538 3.712A5.234 5.234 0 0 1 26 39.25H6a5.234 5.234 0 0 1-3.712-1.538A5.234 5.234 0 0 1 .75 34V6c0-1.45.588-2.762 1.538-3.712A5.234 5.234 0 0 1 6 .75Z"
              />
              <path strokeWidth="1.5" d="M31 13h-8a4 4 0 0 1-4-4V1" />
            </g>
          </svg>
          {mimeType && extType && (
            <UploadboxIconText mimeType={mimeType}>
              {extType}
            </UploadboxIconText>
          )}
        </UploadboxIcon>
        : <></> }
        <Stack gap={0} width={"100%"}>
          {!props.onlyProgress || props.onlyProgress === undefined ? 
            <> {props.tooltip ?
                <Tooltip title={props.title}><Typography variant="subtitle2" noWrap maxWidth={props.maxWidthTitle ? props.maxWidthTitle : "auto"}>{props.title}</Typography></Tooltip>
                  : <Typography variant="subtitle2" noWrap maxWidth={props.maxWidthTitle ? props.maxWidthTitle : "auto"}>{props.title}</Typography>
            }</>
          : <></>}
          <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} >
              {props.hideDataSize ? <></> : <Typography sx={{marginRight: "auto", fontSize: "0.8rem"}} variant="body2">{props.uploadedDataSize + " / " + props.filesize}</Typography>}
              {props.hidePercentage ? <></> : <Typography sx={{marginLeft: "auto", fontSize: "0.8rem"}} variant="body2">{props.uploadPercentage.toFixed(0) + "%"}</Typography>}
          </Box>
          <LinearProgress variant={props.uploadPercentage === 0 ? "buffer" : "determinate"} value={props.uploadPercentage} valueBuffer={0}/>
        </Stack>
      </UploadboxRoot>
    )
  }
)

export default Uploadbox
