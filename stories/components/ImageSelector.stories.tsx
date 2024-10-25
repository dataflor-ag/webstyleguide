import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import { ImageSelector } from "../../packages/df-ui-image-selector/lib/";

const meta: Meta<typeof ImageSelector> = {
  title: "Components/ImageSelector",
  component: ImageSelector,
  tags: ["autodocs"],
  argTypes: {
    label: {
      type: "string",
    },
    value: {
      type: "string",
    },
    image: {
      type: "string",
    },
    onChange: {
      type: "function",
    },
    checked: {
      type: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageSelector>;

export const Checked: Story = {
  args: {
    label: "Light",
    value: "light",
    image: "https://via.placeholder.com/200x140",
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: "Dark",
    value: "dark",
    image: "https://via.placeholder.com/200x140",
  },
};

export const CheckedWithDeleteButton: Story = {
  args: {
    label: "Light",
    value: "light",
    image: "https://picsum.photos/200/300",
    checked: true,
    onDelete: (e) => {
      console.log("delete clicked");
    },
  },
};
export const UncheckedWithDeleteButton: Story = {
  args: {
    label: "Light",
    value: "light",
    image: "https://picsum.photos/200/300",
    checked: false,
    onDelete: (e) => {
      console.log("delete clicked");
    },
  },
};

export const WithDeleteButtonAndGreyPlaceholder: Story = {
  args: {
    label: "Light",
    value: "light",
    image: "https://via.placeholder.com/200x140",
    checked: true,
    onDelete: (e) => {
      console.log("delete clicked");
    },
  },
};
