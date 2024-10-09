import React from "react"

import { Meta, StoryObj } from "@storybook/react"
import { Uploadbox } from "../../packages/df-ui-uploadbox/lib/"

const meta: Meta<typeof Uploadbox> = {
  title: "Components/Uploadbox",
  component: Uploadbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
        ✅ Retrieve the MIME attribute of a file based on the filename or file extension.
    The attribute can be part of the path, filename, or extension:

    - 'my-server/images/design.png'
    - 'dataflor-design-system.pdf'
    - 'png'
        `,
      },
    },
  },
  argTypes: {
    title: {
      type: "string",
    },
    mime: {
      type: "string",
    },
    filesize: {
      type: "string",
    },
    uploadedDataSize: {
      type: "string",
    },
    uploadPercentage: {
      type: "number",
    },
    onlyProgress: {
      type: "boolean",
    },
    boxWidth: {
      type: "string",
    },
    tooltip : {
      type: "boolean"
    },
    maxWidthTitle : {
      type: "string"
    },
    hideDataSize: {
      type: "boolean"
    },
    hidePercentage: {
      type: "boolean"
    }
  },
}

export default meta

type Story = StoryObj<typeof Uploadbox>

export const Default: Story = {
  args: {
    mime: "dataflor-design-system.pdf",
    title: "dataflor-design-system.pdf",
    filesize: "5 MB",
    uploadedDataSize: "1.9 MB",
    uploadPercentage: 1.9 / 5 * 100,
    boxWidth: "25rem"
  },
}

export const JPG: Story = {
  args: {
    mime: "my-server/images/design.jpg",
    title: "design.jpg",
    filesize: "5 MB",
    uploadedDataSize: "1.9 MB",
    uploadPercentage: 1.9 / 5 * 100
  },
}

export const PNG: Story = {
  args: {
    mime: "my-server/images/design.png",
    title: "design.png",
    filesize: "5 MB",
    uploadedDataSize: "1.9 MB",
    uploadPercentage: 1.9 / 5 * 100
  },
}



export function UploadBox() {
  return(
    <Uploadbox
    uploadedDataSize={ "5 MB"}
    uploadPercentage={ (5 / 30 * 100)}
    tooltip
    mime="jpg"
    title="some-picture.jpg"
    filesize="30 MB"
    boxWidth="15rem"
    />
  )
}

export function UploadBoxOnlyProgress() {
  return(
    <Uploadbox
    uploadedDataSize={ "5 MB"}
    uploadPercentage={ (5 / 30 * 100)}
    tooltip
    mime="jpg"
    title="some-picture.jpg"
    filesize="30 MB"
    onlyProgress
    boxWidth="20rem"
    />
  )
}

export function UploadBoxOnlyProgressHiddenDataSize() {
  return(
    <Uploadbox
    uploadedDataSize={ "5 MB"}
    uploadPercentage={ (5 / 30 * 100)}
    tooltip
    mime="jpg"
    title="some-picture.jpg"
    filesize="30 MB"
    onlyProgress
    boxWidth="20rem"
    hideDataSize
    />
  )
}

export function UploadBoxOnlyProgressHiddenPercentage() {
  return(
    <Uploadbox
    uploadedDataSize={ "5 MB"}
    uploadPercentage={ (5 / 30 * 100)}
    tooltip
    mime="jpg"
    title="some-picture.jpg"
    filesize="30 MB"
    onlyProgress
    boxWidth="20rem"
    hidePercentage
    />
  )
}

export function UploadBoxOnlyProgressWith0Progress() {
  return(
    <Uploadbox
    uploadedDataSize={"0 MB"}
    uploadPercentage={ (0 / 30 * 100)}
    tooltip
    mime="jpg"
    title="some-picture.jpg"
    filesize="30 MB"
    boxWidth="20rem"
    />
  )
}

export function UploadBoxNoMimeType() {
  return(
    <Uploadbox
    uploadedDataSize={"0 MB"}
    uploadPercentage={ (0 / 30 * 100)}
    tooltip
    mime=""
    title="some-picture.jpg"
    filesize="30 MB"
    boxWidth="20rem"
    />
  )
}