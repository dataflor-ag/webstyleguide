import React, { useState } from 'react';
import { Meta, StoryObj } from "@storybook/react"
import CustomAppBar from '../../packages/df-ui-custom-app-bar/lib/CustomAppBar/CustomAppBar';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { Button, Stack } from '@mui/material';

const meta: Meta<typeof CustomAppBar> = {
    title: "Components/CustomAppBar",
    component: CustomAppBar,
    tags: ["autodocs"],
    argTypes: {
        isDarkMode: {
            type: "boolean",
        },
        logoImageUrl: {
            type: "string",
        },
        onTasksClick: {
            type: "function",
        },
        onSettingsClick: {
            type: "function",
        },
        onPersonalDataClick: {
            type: "function",
        },
        onSecurityClick: {
            type: "function",
        },
        onAccountSettingsClick: {
            type: "function",
        },
        onCompanyDataClick: {
            type: "function",
        },
        onBankingClick: {
            type: "function",
        },
        onTeamManagementClick: {
            type: "function",
        },
        onRoleManagementClick: {
            type: "function",
        },
        onBillingClick: {
            type: "function",
        },
        onLogoutClick: {
            type: "function",
        },
        isRendered: {
            buttonTasks: {
                type: "boolean",
            },
            buttonSettings: {
                type: "boolean",
            },
            avatarMenuPersonal: {
                type: "boolean",
            },
            avatarMenuCompany: {
                type: "boolean",
            },
            avatarMenuBilling: {
                type: "boolean",
            },
            avatarMenuLogout: {
                type: "boolean",
            },
        },
        componentText: {
            tasks: {
                type: "string",
            },
            settings: {
                type: "string",
            },
            personalData: {
                type: "string",
            },
            security: {
                type: "string",
            },
            accountSettings: {
                type: "string",
            },
            companyData: {
                type: "string",
            },
            banking: {
                type: "string",
            },
            teamManagement: {
                type: "string",
            },
            roleManagement: {
                type: "string",
            },
            billing: {
                type: "string",
            },
            logout: {
                type: "string",
            },
        },
        userData: {
            FirstName: {
                type: "string",
            },
            LastName: {
                type: "string",
            },
            Email: {
                type: "string",
            },
            avatarImageUrl: {
                type: "string",
            },
        },
        
    },
}


export default meta

type Story = StoryObj<typeof CustomAppBar>


export function CustomAppBarBlankDarkMode(): JSX.Element {

    return (
    <Stack>
        <CustomAppBar isDarkMode/>
    </Stack>
    )
}
export function CustomAppBarBlankLightMode(): JSX.Element {

    return (
    <Stack>
        <CustomAppBar />
    </Stack>
    )
}

export function CustomAppBarExample(): JSX.Element {

    const [open, setOpen] = React.useState(false);
    const [toastMessage, setToastMessage] = React.useState("")

    const handleOpenToast = (message: string) => {
        setOpen(true);
        setToastMessage(message)
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
        ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    return (
    <>
    <CustomAppBar
    onLogoClick={() => {handleOpenToast("logo clicked")}}
    onTasksClick={() => {handleOpenToast("tasks clicked")}}
    onSettingsClick={() => {handleOpenToast("settings clicked")}}
    onPersonalDataClick={() => {handleOpenToast("personal data clicked")}}
    userData={{avatarImageUrl: "https://picsum.photos/200/200", FirstName: "John", LastName: "Doe", Email: "john@doe.mail" }}
    isRendered={{
        buttonTasks: true,
        buttonSettings: true,
        avatarMenuPersonal: true,
        avatarMenuCompany: true,
        avatarMenuBilling: true,
        avatarMenuLogout: true
    }}/>
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>)
}