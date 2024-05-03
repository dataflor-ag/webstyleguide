import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Downloadbox } from "../../packages/df-ui-downloadbox/lib/"
// import { Button, Stack, Typography } from "@mui/material"

// ✅ Get mime type of file from filename or extension
// console.log(mime.getType('txt')); // 'text/plain'
// console.log(mime.getType('webp')); // 'image/webp'
// console.log(mime.getType('cat.png')); // 'image/png'
// console.log(mime.getType('nature.jpeg')); // 'image/jpeg'

const meta: Meta<typeof Downloadbox> = {
  title: "Components/Downloadbox",
  component: Downloadbox,
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
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

export const Image: Story = {
  args: {
    mime: "my-server/images/design.jpg",
    title: "design.jpg",
    size: "2.4 MB",
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
    title: "my-plan.pdf",
    size: "960 KB",
    link: "#0",
    download: true,
  },
}

export const DWG: Story = {
  args: {
    mime: "dwg",
    title: "my-plan.pdf",
    size: "960 KB",
    link: "#0",
    download: true,
  },
}

export const DXF: Story = {
  args: {
    mime: "dxf",
    title: "my-plan.pdf",
    size: "960 KB",
    link: "#0",
    download: true,
  },
}
