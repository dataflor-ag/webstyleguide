import React, { useState } from 'react';
import { Meta, StoryObj } from "@storybook/react"
import CustomAppBar from '../../packages/df-ui-custom-app-bar/lib/CustomAppBar/CustomAppBar';

const meta: Meta<typeof CustomAppBar> = {
    title: "Components/CustomAppBar",
    component: CustomAppBar,
    tags: ["autodocs"],
    argTypes: {
        title: {
        type: "string",
        },
    },
}


export default meta

type Story = StoryObj<typeof CustomAppBar>

export function CustomAppBarExample(): JSX.Element {
    return (
    <CustomAppBar />)
}