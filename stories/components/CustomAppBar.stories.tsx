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
            avatarMenu: {
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
            slotInfo: {
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
            accountMenu: {
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
            slotInfo: {
                type: "string"
            }
        },
        userData: {
            firstName: {
                type: "string",
            },
            lastName: {
                type: "string",
            },
            email: {
                type: "string",
            },
            avatarImageUrl: {
                type: "string",
            },
        },
        currentEnvironment: {
            type: "string",
        },
        slotInfoFont: {
            type: "string",
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
    userData={{avatarImageUrl: "https://picsum.photos/200/200", firstName: "John", lastName: "Doe", email: "john@doe.mail" }}
    isRendered={{
        buttonDarkMode: true, 
        buttonTasks: true,
        buttonSettings: true,
        avatarMenu: true,
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


export function CustomAppBarWithCustomText(): JSX.Element {

    return (
    <Stack>
        <CustomAppBar
        userData={{avatarImageUrl: "https://picsum.photos/200/200", firstName: "John", lastName: "Doe", email: "john@doe.mail" }}
      
        componentText={{   
            tasks: "custom tasks",
            settings: "custom settings ",
            personalData: "custom personal data ",
            security: "custom security",
            accountSettings: "custom account settings",
            companyData: "custom company data",
            banking: "custom banking",
            teamManagement: "custom team management",
            roleManagement: "custom role management",
            billing: "custom billing",
            logout: "custom logout",
        }}
        isRendered={{
            buttonTasks: true,
            buttonSettings: true,
            avatarMenu: true,
            avatarMenuPersonal: true,
            avatarMenuCompany: true,
            avatarMenuBilling: true,
            avatarMenuLogout: true
        }}/>
    </Stack>
    )
}

export function CustomAppBarWithSlotInfo(): JSX.Element {

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
    userData={{avatarImageUrl: "https://picsum.photos/200/200", firstName: "John", lastName: "Doe", email: "john@doe.mail" }}
    isRendered={{
        buttonDarkMode: true, 
        buttonTasks: true,
        buttonSettings: true,
        avatarMenu: true,
        avatarMenuPersonal: true,
        avatarMenuCompany: true,
        avatarMenuBilling: true,
        avatarMenuLogout: true,
        slotInfo: true,
    }}
    currentEnvironment={"dev"}
    />
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
    />
    </>)
}

export function CustomAppBarWithSlotInfoDarkMode(): JSX.Element {

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
    userData={{avatarImageUrl: "https://picsum.photos/200/200", firstName: "John", lastName: "Doe", email: "john@doe.mail" }}
    isRendered={{
        buttonDarkMode: true, 
        buttonTasks: true,
        buttonSettings: true,
        avatarMenu: true,
        avatarMenuPersonal: true,
        avatarMenuCompany: true,
        avatarMenuBilling: true,
        avatarMenuLogout: true,
        slotInfo: true,
    }}
    isDarkMode
    currentEnvironment={"dev"}
    />
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>)
}


export function CustomAppBarWithSlotInfoPreprod(): JSX.Element {

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
    userData={{avatarImageUrl: "https://picsum.photos/200/200", firstName: "John", lastName: "Doe", email: "john@doe.mail" }}
    isRendered={{
        buttonTasks: true,
        buttonSettings: true,
        avatarMenu: true,
        avatarMenuPersonal: true,
        avatarMenuCompany: true,
        avatarMenuBilling: true,
        avatarMenuLogout: true,
        slotInfo: true,
    }}
    currentEnvironment={"preprod"}
    />
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>)
}