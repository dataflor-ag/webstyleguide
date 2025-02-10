import React from "react";
import { Stack, Tooltip, Typography } from "@mui/material";
import { styled, type SxProps } from "@mui/material/styles";
import { Mime } from "mime";
import colorMapping from "./ColorMapping";

import standardTypes from "mime/types/standard.js";
import otherTypes from "mime/types/other.js";

const mime = new Mime(standardTypes, otherTypes);
mime.define({ "application/las": ["las"] });

type DownloadboxIconTextProps = {
  mimeType: string;
};

interface DownloadboxProps {
  title: string;
  mime: string;
  size: string;
  link?: string;
  download?: boolean;
  sx?: SxProps;
  maxWidthTitle?: string;
  tooltip?: boolean;
}

const DownloadboxRoot = styled("div", {
  name: "MuiDownloadbox",
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
}));

const DownloadboxIcon = styled("div", {
  name: "MuiDownloadbox",
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
}));

const DownloadboxIconText = styled("div", {
  name: "MuiDownloadbox",
  slot: "iconText",
})<DownloadboxIconTextProps>(({ mimeType }) => ({
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
}));

const DownloadboxLink = styled("a", {
  name: "MuiDownloadbox",
  slot: "link",
})(() => ({
  content: `""`,
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1,
}));

export const Downloadbox = React.forwardRef<HTMLDivElement, DownloadboxProps>(
  (props, ref) => {
    const mimeType = mime.getType(props.mime);
    const extType = mime.getExtension(mimeType!);

    return (
      <DownloadboxRoot sx={{ ...props.sx }} ref={ref}>
        <DownloadboxIcon>
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
            <DownloadboxIconText mimeType={mimeType}>
              {extType}
            </DownloadboxIconText>
          )}
        </DownloadboxIcon>
        <Stack gap={0}>
          {props.tooltip ? (
            <Tooltip title={props.title}>
              <Typography
                variant="subtitle2"
                noWrap
                maxWidth={props.maxWidthTitle ? props.maxWidthTitle : "auto"}
              >
                {props.title}
              </Typography>
            </Tooltip>
          ) : (
            <Typography
              variant="subtitle2"
              noWrap
              maxWidth={props.maxWidthTitle ? props.maxWidthTitle : "auto"}
            >
              {props.title}
            </Typography>
          )}
          <Typography variant="body2">{props.size}</Typography>
        </Stack>
        {props.link && (
          <DownloadboxLink
            id={props.title + "-downloadbox-link"}
            href={props.link}
            download={props.download}
          />
        )}
      </DownloadboxRoot>
    );
  },
);

export default Downloadbox;
