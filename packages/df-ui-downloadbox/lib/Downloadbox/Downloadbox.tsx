import React from "react"
import styled from "@emotion/styled"
import { Mime } from "mime"
import colorMapping from "./ColorMapping"

import standardTypes from "mime/types/standard.js"
import otherTypes from "mime/types/other.js"

const mime = new Mime(standardTypes, otherTypes)
mime.define({ "application/las": ["las"] })

type DownloadboxIconTextProps = {
  mimeType: string
}

interface DrawerFooterProps {
  title: string
  mime: string
  size: string

  link: string
  download: boolean
}

const DownloadboxRoot = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

const DownloadboxIcon = styled.div`
  position: relative;
  line-height: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DownloadboxIconText = styled("div")<DownloadboxIconTextProps>(
  {
    fontFamily: "inherit",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "0.625rem",
    bottom: "6px",
    borderRadius: "0.25rem",
    textAlign: "center",
    position: "absolute",
    letterSpacing: "-1px",
    left: 0,
    height: "1rem",
    lineHeight: "1rem",
    padding: "0 0.5rem",
  },
  (props) => ({
    color: colorMapping(props.mimeType).color,
    backgroundColor: colorMapping(props.mimeType).backgroundColor,
  })
)

const DownloadboxTitle = styled.h4`
  font-weight: 500;
  font-size: 0.875rem;
  color: #3f3f46;
  margin: 0;
`

const DownloadboxFileSize = styled.div`
  font-size: 0.875rem;
  color: #51525c;
  line-height: 20px;
`

const DownloadboxLink = styled.a`
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: "";
  }
`

export const Downloadbox = React.forwardRef<HTMLDivElement, DrawerFooterProps>(
  (props, ref) => {
    const mimeType = mime.getType(props.mime)
    const extType = mime.getExtension(mimeType!)

    return (
      <DownloadboxRoot ref={ref}>
        <DownloadboxIcon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40">
            <g fill="none" fill-rule="evenodd">
              <path
                stroke="#E9E9EC"
                stroke-linejoin="square"
                stroke-width="1.5"
                d="M16.515.75a5.25 5.25 0 0 1 3.712 1.538l9.485 9.485a5.25 5.25 0 0 1 1.538 3.712V34c0 1.45-.588 2.762-1.538 3.712A5.234 5.234 0 0 1 26 39.25H6a5.234 5.234 0 0 1-3.712-1.538A5.234 5.234 0 0 1 .75 34V6c0-1.45.588-2.762 1.538-3.712A5.234 5.234 0 0 1 6 .75Z"
              />
              <path
                stroke="#E9E9EC"
                stroke-width="1.5"
                d="M31 13h-8a4 4 0 0 1-4-4V1"
              />
            </g>
          </svg>
          {mimeType && extType && (
            <DownloadboxIconText mimeType={mimeType}>
              {extType}
            </DownloadboxIconText>
          )}
        </DownloadboxIcon>

        <div>
          <DownloadboxTitle>{props.title}</DownloadboxTitle>
          <DownloadboxFileSize>{props.size}</DownloadboxFileSize>
        </div>
        {props.link && (
          <DownloadboxLink href={props.link} download={props.download} />
        )}
      </DownloadboxRoot>
    )
  }
)

export default Downloadbox
