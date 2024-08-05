import React from "react"

import { Meta, StoryObj } from "@storybook/react"
import { Downloadbox } from "../../packages/df-ui-downloadbox/lib/"

const meta: Meta<typeof Downloadbox> = {
  title: "Components/Downloadbox",
  component: Downloadbox,
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
    size: {
      type: "string",
    },
    link: {
      type: "string",
    },
    download: {
      type: "boolean",
    },
    tooltip : {
      type: "boolean"
    },
    maxWidthTitle : {
      type: "string"
    }
  },
}

export default meta

type Story = StoryObj<typeof Downloadbox>

export const Default: Story = {
  args: {
    mime: "dataflor-design-system.pdf",
    title: "dataflor-design-system.pdf",
    size: "10.2 MB",
  },
}

export const JPG: Story = {
  args: {
    mime: "my-server/images/design.jpg",
    title: "design.jpg",
    size: "2.4 MB",
  },
}

export const PNG: Story = {
  args: {
    mime: "my-server/images/design.png",
    title: "design.png",
    size: "1.9 MB",
  },
}

export const Link: Story = {
  args: {
    mime: "docx",
    title: "my-plan.docx",
    size: "1.3 MB",
    link: "#0",
  },
}

export const DownloadLink: Story = {
  args: {
    mime: "pdf",
    title: "my-plan.pdf",
    size: "960 KB",
    link: "#0",
    download: true,
  },
}

export const LAS: Story = {
  args: {
    mime: "las",
    title: "file.las",
    size: "960 KB",
    link: "#0",
  },
}

export const DWG: Story = {
  args: {
    mime: "dwg",
    title: "file.dwg",
    size: "960 KB",
    link: "#0",
  },
}

export const DXF: Story = {
  args: {
    mime: "dxf",
    title: "file.dxf",
    size: "960 KB",
    link: "#0",
  },
}

export const Word: Story = {
  args: {
    mime: "doc",
    title: "file.doc",
    size: "294 KB",
  },
}

export const EXCEL: Story = {
  args: {
    mime: "xlsx",
    title: "file.dxf",
    size: "960 KB",
  },
}

export const PowerPoint: Story = {
  args: {
    mime: "pptx",
    title: "file.pptx",
    size: "1.2 MB",
  },
}

export const ZIP: Story = {
  args: {
    mime: "zip",
    title: "archive.zip",
    size: "3.1 GB",
  },
}


export function DownloadBoxWithLongTitledFile() {
  return(
    <Downloadbox tooltip maxWidthTitle={"10rem"} mime="jpg" title="design-with-a-very-long-file-title-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.jpg" size="1 GB"/>
  )
}
