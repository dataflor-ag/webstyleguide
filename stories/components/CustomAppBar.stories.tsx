import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import CustomAppBar from "../../packages/df-ui-custom-app-bar/lib/CustomAppBar/CustomAppBar";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { Stack } from "@mui/material";

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
    onChangeCompanyClick: {
      type: "function",
    },
    onCompanyDataClick: {
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
      companyMenu: {
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
      companyMenu: {
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
        type: "string",
      },
      slotInfoLong: {
        type: "string",
      },
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
    companyData: {
      companyName: {
        type: "string",
      },
      location: {
        type: "string",
      },
      logoUrl: {
        type: "string",
      },
    },
    companyList: {
      companyName: {
        type: "string",
      },
      location: {
        type: "string",
      },
      logoUrl: {
        type: "string",
      },
      id: {
        type: "string",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomAppBar>;

export function CustomAppBarBlankDarkMode(): JSX.Element {
  return (
    <Stack>
      <CustomAppBar isDarkMode />
    </Stack>
  );
}

export function CustomAppBarBlankLightMode(): JSX.Element {
  return (
    <Stack>
      <CustomAppBar />
    </Stack>
  );
}

export function CustomAppBarExample(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        isRendered={{
          buttonDarkMode: true,
          buttonTasks: true,
          buttonSettings: true,
          avatarMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithNoUserAvatarImage(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        userData={{
          avatarImageUrl: "",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        isRendered={{
          avatarMenu: true,
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithCustomText(): JSX.Element {
  return (
    <Stack>
      <CustomAppBar
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        componentText={{
          tasks: "custom tasks",
          settings: "custom settings ",
          personalData: "custom personal data ",
          security: "custom security",
          accountSettings: "custom account settings",
          companyData: "custom company data",
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
          avatarMenuLogout: true,
        }}
      />
    </Stack>
  );
}

export function CustomAppBarWithSlotInfo(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
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
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithSlotInfoDarkMode(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        componentText={{ slotInfo: "You are currently on test slot" }}
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
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithSlotInfoPreprod(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
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
        componentText={{
          slotInfo: "3: Preprod",
          slotInfoLong: "You are currently on test slot 3: Preprod",
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithSlotInfoBetaDark(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        isDarkMode
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
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
        componentText={{
          slotInfo: "2: Beta",
          slotInfoLong: "You are currently on test slot 2: Beta",
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithCompanyMenu(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const companyList = [
    {
      companyName: "ABC AG",
      location: "Tokyo",
      logoUrl: "https://picsum.photos/200/200",
      id: "001",
    },
    {
      companyName: "DEF Corp",
      location: "Las Vegas",
      logoUrl: "https://picsum.photos/200/200",
      id: "002",
    },
  ];
  return (
    <>
      <CustomAppBar
        onChangeCompanyClick={(e, id) => {
          handleOpenToast(
            companyList.find((company) => company.id === id)?.companyName +
              " has been clicked",
          );
        }}
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          buttonTasks: true,
          buttonSettings: true,
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
        }}
        componentText={{}}
        companyList={companyList}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithCompanyMenuDark(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const companyList = [
    {
      companyName: "ABC AG",
      location: "Tokyo",
      logoUrl: "https://picsum.photos/200/200",
      id: "001",
    },
    {
      companyName: "DEF Corp",
      location: "Las Vegas",
      logoUrl: "https://picsum.photos/200/200",
      id: "002",
    },
  ];
  return (
    <>
      <CustomAppBar
        isDarkMode
        onChangeCompanyClick={(e, id) => {
          handleOpenToast(
            companyList.find((company) => company.id === id)?.companyName +
              " has been clicked",
          );
        }}
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          buttonTasks: true,
          buttonSettings: true,
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
        }}
        componentText={{}}
        companyList={companyList}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithCompanyMenuJustOneCompany(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          buttonTasks: true,
          buttonSettings: true,
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
        }}
        componentText={{}}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithCompanyMenuNoCompanyLogo(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "",
        }}
        isRendered={{
          buttonTasks: true,
          buttonSettings: true,
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
        }}
        componentText={{}}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithUserAnCompanyNameButNoLogo(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "",
        }}
        isRendered={{
          buttonTasks: true,
          buttonSettings: true,
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
        }}
        componentText={{}}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithCompanyMenuAndSlotInfo(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const companyList = [
    {
      companyName: "ABC AG",
      location: "Tokyo",
      logoUrl: "https://picsum.photos/200/200",
      id: "001",
    },
    {
      companyName: "DEF Corp",
      location: "Las Vegas",
      logoUrl: "https://picsum.photos/200/200",
      id: "002",
    },
  ];
  return (
    <>
      <CustomAppBar
        onChangeCompanyClick={(e, id) => {
          handleOpenToast(
            companyList.find((company) => company.id === id)?.companyName +
              " has been clicked",
          );
        }}
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          buttonTasks: true,
          buttonSettings: true,
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
          slotInfo: true,
        }}
        componentText={{}}
        companyList={companyList}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithCompanyMenuAndNoOtherButtons(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const companyList = [
    {
      companyName: "ABC AG",
      location: "Tokyo",
      logoUrl: "https://picsum.photos/200/200",
      id: "001",
    },
    {
      companyName: "DEF Corp",
      location: "Las Vegas",
      logoUrl: "https://picsum.photos/200/200",
      id: "002",
    },
  ];
  return (
    <>
      <CustomAppBar
        onChangeCompanyClick={(e, id) => {
          handleOpenToast(
            companyList.find((company) => company.id === id)?.companyName +
              " has been clicked",
          );
        }}
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "https://picsum.photos/200/200",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
          slotInfo: true,
        }}
        componentText={{}}
        companyList={companyList}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithLanguageMenuNoLanguageSelectedAndAvatarMenuAndSlotInfo(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        isRendered={{
          slotInfo: true,
          languageMenu: true,
          buttonDarkMode: true,
          avatarMenu: true,
          avatarMenuPersonal: true,
        }}
        isDarkMode
        componentText={{}}
        onLanguageMenuClickDE={() => {
          handleOpenToast("Change to German");
        }}
        onLanguageMenuClickNL={() => {
          handleOpenToast("Change to Dutch");
        }}
        onLanguageMenuClickEN={() => {
          handleOpenToast("Change to English");
        }}
        onLanguageMenuClickIT={() => {
          handleOpenToast("Change to Italian");
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithLanguageAndAvatarMenuAndSlotInfo(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const [language, setLanguage] = useState<"de" | "en" | "it" | "nl">("de");

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        isRendered={{
          slotInfo: true,
          languageMenu: true,
          buttonDarkMode: true,
          avatarMenu: true,
          avatarMenuPersonal: true,
        }}
        isDarkMode
        componentText={{}}
        currentLanguage={language}
        onLanguageMenuClickDE={() => {
          handleOpenToast("Change to German");
          setLanguage("de");
        }}
        onLanguageMenuClickNL={() => {
          handleOpenToast("Change to Dutch");
          setLanguage("nl");
        }}
        onLanguageMenuClickEN={() => {
          handleOpenToast("Change to English");
          setLanguage("en");
        }}
        onLanguageMenuClickIT={() => {
          handleOpenToast("Change to Italian");
          setLanguage("it");
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}
export function CustomAppBarWithLanguageMenuOnPreprod(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const [language, setLanguage] = useState<"de" | "en" | "it" | "nl">("de");

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <CustomAppBar
        isRendered={{
          languageMenu: true,
          buttonDarkMode: true,
        }}
        isDarkMode
        componentText={{
          slotInfo: "3: Preprod",
          slotInfoLong: "You are currently on test slot 3: Preprod",
        }}
        currentLanguage={language}
        onLanguageMenuClickDE={() => {
          handleOpenToast("Change to German");
          setLanguage("de");
        }}
        onLanguageMenuClickNL={() => {
          handleOpenToast("Change to Dutch");
          setLanguage("nl");
        }}
        onLanguageMenuClickEN={() => {
          handleOpenToast("Change to English");
          setLanguage("en");
        }}
        onLanguageMenuClickIT={() => {
          handleOpenToast("Change to Italian");
          setLanguage("it");
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}
export function CustomAppBarWithCompanyMenuAndInvites(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const companyList = [
    {
      companyName: "ABC AG",
      location: "Tokyo",
      logoUrl: "https://picsum.photos/200/200",
      id: "001",
    },
    {
      companyName: "DEF Corp",
      location: "Las Vegas",
      logoUrl: "",
      id: "002",
    },
  ];

  const inviteList = [
    {
      companyName: "Inviting Corp.",
      invitingUser: "Ingrid Invitee",
      logoUrl: "https://picsum.photos/200/200",
      inviteId: "i001",
    },
    {
      companyName: "Another Corp.",
      invitingUser: "John Doe",
      logoUrl: "",
      inviteId: "i002",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <CustomAppBar
        onDarkmodeClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        isDarkMode={isDarkMode}
        onChangeCompanyClick={(e, id) => {
          handleOpenToast(
            companyList.find((company) => company.id === id)?.companyName +
              " has been clicked",
          );
        }}
        onCompanyInviteClick={(e, id) => {
          handleOpenToast(
            "Invite from " +
              inviteList.find((invite) => invite.inviteId === id)?.companyName +
              " has been clicked",
          );
        }}
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
          buttonDarkMode: true,
        }}
        componentText={{}}
        companyList={companyList}
        companyInvitesList={inviteList}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppBarWithCompanyMenuAndEmptyInviteList(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const companyList = [
    {
      companyName: "ABC AG",
      location: "Tokyo",
      logoUrl: "https://picsum.photos/200/200",
      id: "001",
    },
    {
      companyName: "DEF Corp",
      location: "Las Vegas",
      logoUrl: "",
      id: "002",
    },
  ];

  const inviteList = [];

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <CustomAppBar
        onDarkmodeClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        isDarkMode={isDarkMode}
        onChangeCompanyClick={(e, id) => {
          handleOpenToast(
            companyList.find((company) => company.id === id)?.companyName +
              " has been clicked",
          );
        }}
        onCompanyInviteClick={(e, id) => {
          handleOpenToast("no invite available");
        }}
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
          buttonDarkMode: true,
        }}
        componentText={{}}
        companyList={companyList}
        companyInvitesList={inviteList}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppbarWithHelpMenuWithWikiLinks(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const companyList = [
    {
      companyName: "ABC AG",
      location: "Tokyo",
      logoUrl: "https://picsum.photos/200/200",
      id: "001",
    },
    {
      companyName: "DEF Corp",
      location: "Las Vegas",
      logoUrl: "",
      id: "002",
    },
  ];

  const helpMenuLinkList = [
    {
      title: "Help Link One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat elit eget ullamcorper ultricies.",
      onLinkClick: () => {
        console.log("Help Link One clicked");
      },
    },
    {
      title: "Help Link Two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat elit eget ullamcorper ultricies.",
      onLinkClick: () => {
        console.log("Help Link Two clicked");
      },
    },
    {
      title:
        "Help Link Three is a link which leads to a page with a lot of info on how to do stuff",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat elit eget ullamcorper ultricies.",
      onLinkClick: () => {
        console.log("Help Link Three clicked");
      },
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <CustomAppBar
        onDarkmodeClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        isDarkMode={isDarkMode}
        onChangeCompanyClick={(e, id) => {
          handleOpenToast(
            companyList.find((company) => company.id === id)?.companyName +
              " has been clicked",
          );
        }}
        onCompanyInviteClick={(e, id) => {
          handleOpenToast("no invite available");
        }}
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
          helpMenu: true,
        }}
        componentText={{}}
        companyList={companyList}
        helpMenuLinks={helpMenuLinkList}
        legalInfoLinks={[
          { title: "Imprint", linkUrl: "https://www.google.com" },
          { title: "Privacy Policy", linkUrl: "https://www.google.com" },
          {
            title: "Mandatory data protection information",
            linkUrl: "https://www.google.com",
          },
          { title: "Terms and Conditions", linkUrl: "https://www.google.com" },
        ]}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppbarWithHelpMenuWithWikiLinksDArk(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const companyList = [
    {
      companyName: "ABC AG",
      location: "Tokyo",
      logoUrl: "https://picsum.photos/200/200",
      id: "001",
    },
    {
      companyName: "DEF Corp",
      location: "Las Vegas",
      logoUrl: "",
      id: "002",
    },
  ];

  const helpMenuLinkList = [
    {
      title: "Help Link One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat elit eget ullamcorper ultricies.",
      onLinkClick: () => {
        console.log("Help Link One clicked");
      },
    },
    {
      title: "Help Link Two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat elit eget ullamcorper ultricies.",
      onLinkClick: () => {
        console.log("Help Link Two clicked");
      },
    },
    {
      title:
        "Help Link Three is a link which leads to a page with a lot of info on how to do stuff",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat elit eget ullamcorper ultricies.",
      onLinkClick: () => {
        console.log("Help Link Three clicked");
      },
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <>
      <CustomAppBar
        onDarkmodeClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        isDarkMode={isDarkMode}
        onChangeCompanyClick={(e, id) => {
          handleOpenToast(
            companyList.find((company) => company.id === id)?.companyName +
              " has been clicked",
          );
        }}
        onCompanyInviteClick={(e, id) => {
          handleOpenToast("no invite available");
        }}
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
          helpMenu: true,
        }}
        componentText={{}}
        companyList={companyList}
        helpMenuLinks={helpMenuLinkList}
        legalInfoLinks={[
          { title: "Imprint", linkUrl: "https://www.google.com" },
          { title: "Privacy Policy", linkUrl: "https://www.google.com" },
          {
            title: "Mandatory data protection information",
            linkUrl: "https://www.google.com",
          },
          { title: "Terms and Conditions", linkUrl: "https://www.google.com" },
        ]}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}
export function CustomAppbarWithHelpMenu(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const companyList = [
    {
      companyName: "ABC AG",
      location: "Tokyo",
      logoUrl: "https://picsum.photos/200/200",
      id: "001",
    },
    {
      companyName: "DEF Corp",
      location: "Las Vegas",
      logoUrl: "",
      id: "002",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <CustomAppBar
        onDarkmodeClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        isDarkMode={isDarkMode}
        onChangeCompanyClick={(e, id) => {
          handleOpenToast(
            companyList.find((company) => company.id === id)?.companyName +
              " has been clicked",
          );
        }}
        onCompanyInviteClick={(e, id) => {
          handleOpenToast("no invite available");
        }}
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          avatarMenu: true,
          companyMenu: true,
          avatarMenuPersonal: true,
          avatarMenuCompany: true,
          avatarMenuBilling: true,
          avatarMenuLogout: true,
          helpMenu: true,
        }}
        legalInfoLinks={[
          { title: "Imprint", linkUrl: "https://www.google.com" },
          { title: "Privacy Policy", linkUrl: "https://www.google.com" },
          {
            title: "Mandatory data protection information",
            linkUrl: "https://www.google.com",
          },
          { title: "Terms and Conditions", linkUrl: "https://www.google.com" },
        ]}
        companyList={companyList}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}

export function CustomAppbarOnlyDeviceManagement(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleOpenToast = (message: string) => {
    setOpen(true);
    setToastMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const companyList = [
    {
      companyName: "ABC AG",
      location: "Tokyo",
      logoUrl: "https://picsum.photos/200/200",
      id: "001",
    },
    {
      companyName: "DEF Corp",
      location: "Las Vegas",
      logoUrl: "",
      id: "002",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <CustomAppBar
        onDarkmodeClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        isDarkMode={isDarkMode}
        onChangeCompanyClick={(e, id) => {
          handleOpenToast(
            companyList.find((company) => company.id === id)?.companyName +
              " has been clicked",
          );
        }}
        onCompanyInviteClick={(e, id) => {
          handleOpenToast("no invite available");
        }}
        onLogoClick={() => {
          handleOpenToast("logo clicked");
        }}
        onTasksClick={() => {
          handleOpenToast("tasks clicked");
        }}
        onSettingsClick={() => {
          handleOpenToast("settings clicked");
        }}
        onPersonalDataClick={() => {
          handleOpenToast("personal data clicked");
        }}
        userData={{
          avatarImageUrl: "",
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.mail",
        }}
        companyData={{
          companyName: "Random Ltd.",
          location: "New York",
          logoUrl: "https://picsum.photos/200/200",
        }}
        isRendered={{
          companyMenu: true,
          avatarMenu: true,
          avatarMenuCompanyDeviceManagement: true,
          avatarMenuLogout: true,
        }}
        legalInfoLinks={[
          { title: "Imprint", linkUrl: "https://www.google.com" },
          { title: "Privacy Policy", linkUrl: "https://www.google.com" },
          {
            title: "Mandatory data protection information",
            linkUrl: "https://www.google.com",
          },
          { title: "Terms and Conditions", linkUrl: "https://www.google.com" },
        ]}
        companyList={companyList}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
      />
    </>
  );
}
