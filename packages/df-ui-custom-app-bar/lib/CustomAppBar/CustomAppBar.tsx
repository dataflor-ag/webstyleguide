import React from "react";
import {
  Typography,
  Box,
  AppBar,
  ButtonBase,
  Container,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Menu,
  MenuItem,
  Avatar,
  type AppBarProps,
  ThemeProvider,
  CssBaseline,
  type SxProps,
} from "@mui/material";
import Icon from "@dataflor-ag/df-ui-icons";
import { getTheme } from "@dataflor-ag/df-ui-theme";

export interface CustomAppBarProps extends AppBarProps {
  logoImageUrl?: string;
  onLogoClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onDarkmodeClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onTasksClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onSettingsClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onPersonalDataClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onSecurityClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onAccountSettingsClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onCompanyDataClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onBankingClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onTeamManagementClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onRoleManagementClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onBillingClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onLogoutClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onChangeCompanyClick?: (
    event: React.MouseEvent<HTMLElement>,
    companyId: string,
  ) => void;
  isRendered?: {
    buttonDarkMode?: boolean;
    buttonTasks?: boolean;
    buttonSettings?: boolean;
    companyMenu?: boolean;
    avatarMenu?: boolean;
    avatarMenuPersonal?: boolean;
    avatarMenuCompany?: boolean;
    avatarMenuBilling?: boolean;
    avatarMenuLogout?: boolean;
    slotInfo?: boolean;
  };
  componentText?: {
    slotInfo?: string;
    darkMode?: string;
    tasks?: string;
    settings?: string;
    accountMenu?: string;
    companyMenu?: string;
    personalData?: string;
    security?: string;
    accountSettings?: string;
    companyData?: string;
    banking?: string;
    teamManagement?: string;
    roleManagement?: string;
    billing?: string;
    logout?: string;
  };
  isDarkMode?: boolean;
  userData?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    avatarImageUrl?: string;
  };
  companyData?: {
    companyName?: string;
    location?: string;
    logoUrl?: string;
  };
  companyList?: {
    companyName?: string;
    location?: string;
    logoUrl?: string;
    id: string;
  }[];
  currentEnvironment?: "dev" | "beta" | "preprod" | "prod";
  slotInfoFont?: string;
}

export const CustomAppBar = React.forwardRef<HTMLElement, CustomAppBarProps>(
  (props, ref) => {
    const { ...CustomAppBarProps } = props;

    const theme = getTheme(props.isDarkMode ? "dark" : "light");

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [anchorElCompany, setAnchorElCompany] =
      React.useState<HTMLElement | null>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isCompanyMenuOpen = Boolean(anchorElCompany);

    const environmentOptions = {
      dev: "1: Development",
      beta: "2: Beta",
      preprod: "3: PreProd",
      prod: "4: Prod",
    };

    const slotInfoText =
      props.currentEnvironment !== undefined
        ? environmentOptions[props.currentEnvironment]
        : "";

    const isSlotInfoShown =
      props.isRendered?.slotInfo !== undefined &&
      props.currentEnvironment !== "prod";

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>): void => {
      setAnchorEl(event.currentTarget);
    };
    const handleCompanyMenuClick = (
      event: React.MouseEvent<HTMLElement>,
    ): void => {
      setAnchorElCompany(event.currentTarget);
    };

    const handleClose = (): void => {
      setAnchorEl(null);
    };

    const handleCompanyClose = (): void => {
      setAnchorElCompany(null);
    };

    const handleMenuItemClick = (
      _event: React.MouseEvent<HTMLElement>,
      navigateTo: ((event: React.MouseEvent<HTMLElement>) => void) | undefined,
    ): void => {
      handleClose();
      if (navigateTo !== undefined) navigateTo(_event);
    };

    function DataflorLogo(): JSX.Element {
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2.75rem"
            viewBox="0 0 305.9 106.6"
          >
            <defs></defs>
            <path
              style={{ strokeWidth: "0px", fill: "#6ab023" }}
              d="M44.6,3.5h-18.3c-3.5,0-6.3,2.8-6.3,6.3v10.2s0,9.2,0,9.2c0,.6.4,1,.9,1h6.7c.5,0,.9-.4.9-1V13c0-.5.4-.9.9-.9h11.7c.5,0,.9.4.9.9v21c0,.5-.4.9-.9.9h-25.1c-.5,0-.9-.4-.9-.9V4.4c0-.5-.4-.9-.9-.9h-6.7c-.5,0-.9.4-.9.9v32.9c0,3.5,2.8,6.3,6.3,6.3h10.7c.5,0,.9.4.9,1v18c-4.7-6.3-12.2-7.9-15.1-5-2.9,2.8-1.2,10.5,4.5,14.8,4.9,3.7,10.3,3.7,10.7,6.4v21.4h0v2c0,.5.4.9.9.9h6.7c.5,0,.9-.4.9-.9v-3.6s0,0,0,0v-53.9c0-.6.4-1,.9-1h10.4c3.5,0,6.3-2.8,6.3-6.3V9.7c0-3.5-2.8-6.3-6.3-6.3ZM22.8,71c-1.4,1.4-4.8.1-7.6-2.7-2.8-2.9-3.9-6.3-2.6-7.6,1.4-1.4,4.8-.1,7.6,2.7,2.8,2.9,3.9,6.3,2.6,7.6Z"
            />
            <path
              style={{
                strokeWidth: "0px",
                fill: props.isDarkMode ? "#ffffff" : "#1a171b",
              }}
              d="M298,67.9c-2.9,0-5.8,1-8.1,2.9v-1.2c0-.7-.5-1.2-1.2-1.2h-7.1c-.7,0-1.2.5-1.2,1.2v31.7c0,.7.6,1.3,1.3,1.3h7.2c.7,0,1.2-.6,1.2-1.3v-23.3c2.2-1.2,4.8-2.1,7.7-2.1h.5c.5,0,.9-.6.9-1.1v-5.7c0-.7-.5-1.2-1.2-1.2ZM260.1,67.9c-9.7,0-15,6-15,15.5v4.2c0,9.5,5.3,15.5,15,15.5s14.9-6,14.9-15.5v-4.2c0-9.5-5.2-15.5-14.9-15.5ZM265.4,87.6c0,4.8-1.8,7.3-5.3,7.3s-5.4-2.5-5.4-7.3v-4.2c0-4.8,1.9-7.3,5.4-7.3s5.3,2.4,5.3,7.3v4.2ZM75,57.7c-5,0-10.3.5-12.7.9-1.1.2-1.7.7-1.7,2.1v39.4c0,1.4.6,1.9,1.7,2.1,2.4.4,7.8.9,12.7.9,11.9,0,19-6.3,19-18.9v-7.7c0-12.6-7.2-18.9-19-18.9ZM83.8,84.3c0,8.1-3.5,10.2-8.8,10.2s-3.4,0-4.2-.1v-27.9c.8,0,2.7-.1,4.2-.1,5.4,0,8.8,2.1,8.8,10.2v7.7ZM223.3,56.8c-1.8-.3-3-.5-4.7-.5-6.6,0-10,1.7-10,10.2v1.9h-4.8c-.7,0-1.3.6-1.3,1.3v3.9c0,.7.6,1.1,1.3,1.3l4.8.8v25.8c0,.7.5,1.2,1.2,1.2h7.3c.7,0,1.2-.5,1.2-1.2v-25.8h4.9c.7,0,1.2-.5,1.2-1.2v-4.8c0-.7-.5-1.2-1.2-1.2h-4.9v-2c0-2.4.2-2.8,2-2.8h2.9c.8,0,1.3-.4,1.3-1v-4.7c0-.6-.4-1.1-1.1-1.2ZM125.5,64.3c-1.4-5.7-5.7-6.6-9.8-6.6s-8.5.9-9.9,6.6l-8.9,37c0,.1,0,.2,0,.3,0,.6.4,1,1,1h8.4c.6,0,1.1-.5,1.2-1.1l2.1-9.8h12.2l2.1,9.8c.1.6.6,1.1,1.2,1.1h8.4c.6,0,1-.4,1-1s0-.2,0-.3l-8.9-37ZM111.1,83.6l3.6-16.5c.1-.6.3-.9.8-.9s.7.3.8.9l3.6,16.5h-8.9ZM192.6,64.3c-1.4-5.7-5.7-6.6-9.8-6.6s-8.5.9-9.9,6.6l-8.9,37c0,.1,0,.2,0,.3,0,.6.4,1,1,1h8.4c.6,0,1.1-.5,1.2-1.1l2.1-9.8h12.2l2.1,9.8c.1.6.6,1.1,1.2,1.1h8.4c.6,0,1-.4,1-1s0-.2,0-.3l-8.9-37ZM178.3,83.6l3.6-16.5c.1-.6.3-.9.8-.9s.7.3.8.9l3.6,16.5h-8.9ZM238.3,56.8h-7.3c-.7,0-1.3.5-1.3,1.2v43.3c0,.7.6,1.3,1.3,1.3h7.3c.7,0,1.1-.6,1.1-1.3v-43.3c0-.7-.5-1.2-1.1-1.2ZM165.2,65.5v-6.1c0-.7-.6-1.1-1.3-1.1h-29.6c-.7,0-1.2.5-1.2,1.1v6.1c0,.7.5,1.1,1.2,1.1h9.7v34.7c0,.7.5,1.2,1.2,1.2h7.8c.7,0,1.2-.5,1.2-1.2v-34.7h9.7c.7,0,1.3-.5,1.3-1.1Z"
            />
          </svg>
        </>
      );
    }

    function UserAvatar(): JSX.Element {
      if (
        props.userData?.avatarImageUrl !== undefined &&
        props.userData?.avatarImageUrl !== ""
      ) {
        return <Avatar src={props.userData.avatarImageUrl} />;
      } else return <Avatar />;
    }

    function CompanyLogo(props: {
      imageUrl?: string | undefined;
      variant?: "square" | "rounded" | "circular";
      sx?: SxProps;
    }): JSX.Element {
      if (props.imageUrl !== undefined && props.imageUrl !== "") {
        return (
          <Avatar
            sx={{ ...props.sx }}
            src={props.imageUrl}
            variant={props?.variant ? props.variant : "rounded"}
          />
        );
      } else
        return (
          <Avatar
            sx={{ ...props.sx }}
            variant={props?.variant ? props.variant : "rounded"}
          >
            <Icon.company />
          </Avatar>
        );
    }

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <AppBar position="static" ref={ref} id="main-app-bar">
          <Container>
            <Toolbar disableGutters>
              <ButtonBase
                sx={{ marginRight: "0.5rem" }}
                onClick={props.onLogoClick}
                id="button-back-to-dashboard"
              >
                {props.logoImageUrl ? (
                  <img src={props.logoImageUrl} />
                ) : (
                  <DataflorLogo />
                )}
              </ButtonBase>
              {isSlotInfoShown && (
                <>
                  <Box
                    sx={{
                      padding: "0.25rem 1rem",
                      borderRadius: "30px",
                      marginInline: "auto",
                      boxShadow: "0 0 2px 0" + theme.palette.primary[100],
                      border: "1px solid " + theme.palette.primary[200],
                      backgroundColor: theme.palette.primary[50],
                      color: theme.palette.primary[600],
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {props.componentText?.slotInfo &&
                        props.componentText.slotInfo}{" "}
                      {slotInfoText}
                    </Typography>
                  </Box>
                </>
              )}
              <Stack direction="row" gap={1} sx={{ marginLeft: "0.5rem" }}>
                {props.isRendered?.buttonDarkMode !== undefined && (
                  <Tooltip
                    title={
                      props.componentText?.darkMode
                        ? props.componentText.darkMode
                        : "Change Theme"
                    }
                  >
                    <IconButton
                      onClick={props.onDarkmodeClick}
                      id="button-toggle-darkmode"
                    >
                      {props.isDarkMode ? <Icon.sun /> : <Icon.sunFilled />}
                    </IconButton>
                  </Tooltip>
                )}
                {props.isRendered?.buttonTasks !== undefined && (
                  <Tooltip
                    title={
                      props.componentText?.tasks
                        ? props.componentText.tasks
                        : "Task Overview"
                    }
                  >
                    <IconButton
                      onClick={props.onTasksClick}
                      id="button-open-task-overview"
                    >
                      <Icon.task />
                    </IconButton>
                  </Tooltip>
                )}
                {props.isRendered?.buttonSettings !== undefined && (
                  <Tooltip
                    title={
                      props.componentText?.settings
                        ? props.componentText.settings
                        : "Settings"
                    }
                  >
                    <IconButton
                      onClick={props.onSettingsClick}
                      id="button-open-settings-page"
                    >
                      <Icon.settings />
                    </IconButton>
                  </Tooltip>
                )}
                {props.isRendered?.companyMenu && (
                  <>
                    <Box
                      sx={{
                        marginLeft: 3.5,
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Tooltip
                        title={
                          props.componentText?.companyMenu
                            ? props.componentText.companyMenu
                            : "Company Account Menu"
                        }
                      >
                        <IconButton
                          size="small"
                          onClick={handleCompanyMenuClick}
                          id="button-company-menu"
                        >
                          <CompanyLogo
                            imageUrl={props.companyData?.logoUrl}
                            variant="rounded"
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Menu
                      anchorEl={anchorElCompany}
                      open={isCompanyMenuOpen}
                      onClose={handleCompanyClose}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                      id="company-account-menu"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "0.25rem",
                          alignItems: "center",
                          my: "5px",
                          paddingInline: "0.5rem",
                          pr: "1rem",
                          backgroundColor: theme.palette.background.paper,
                        }}
                        id="company-menu-info-element"
                      >
                        <CompanyLogo
                          imageUrl={props.companyData?.logoUrl}
                          variant="rounded"
                        />
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem",
                            paddingLeft: "0.5rem",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            style={{ fontSize: "0.8rem", lineHeight: "0.8rem" }}
                          >
                            {props.companyData?.companyName}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            style={{
                              fontSize: "0.7rem",
                              lineHeight: "0.7rem",
                              color: theme.palette.grey[500],
                            }}
                          >
                            {props.companyData?.location}
                          </Typography>
                        </Box>
                      </Box>
                      {props.companyList !== undefined &&
                        props.companyList.length > 0 && (
                          <Divider
                            sx={{
                              marginBlock: "0.125rem",
                            }}
                          />
                        )}
                      {props.companyList?.map((company) => (
                        <MenuItem
                          key={company.id}
                          id={"button-change-company-" + company?.companyName}
                          onClick={(e) => {
                            if (props.onChangeCompanyClick && company.id) {
                              props.onChangeCompanyClick(e, company.id);
                            }
                            handleCompanyClose();
                          }}
                          sx={{
                            height: "3.25rem",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              gap: "0.25rem",
                              alignItems: "center",
                              pr: "1rem",
                            }}
                            id="company-menu-info-element"
                          >
                            <CompanyLogo
                              sx={{
                                opacity: 0.65,
                                transition: "all 200ms ease-in-out",
                                ":hover": { opacity: 0.75 },
                              }}
                              imageUrl={company.logoUrl}
                            />
                            <Box
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.25rem",
                                paddingLeft: "0.5rem",
                              }}
                            >
                              <Typography
                                variant="subtitle2"
                                style={{
                                  fontSize: "0.8rem",
                                  lineHeight: "0.8rem",
                                }}
                              >
                                {company.companyName}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                style={{
                                  fontSize: "0.7rem",
                                  lineHeight: "0.7rem",
                                  color: theme.palette.grey[500],
                                }}
                              >
                                {company.location}
                              </Typography>
                            </Box>
                          </Box>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                )}
                {props.isRendered?.avatarMenu && (
                  <>
                    {props.isRendered?.buttonSettings ||
                    props.isRendered?.buttonTasks ? (
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          marginRight: props.isRendered.companyMenu ? 3 : 5,
                          marginLeft: props.isRendered.companyMenu ? 3.5 : 3,
                        }}
                      />
                    ) : (
                      <></>
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Tooltip
                        title={
                          props.componentText?.accountMenu
                            ? props.componentText.accountMenu
                            : "Account Menu"
                        }
                      >
                        <IconButton
                          size="small"
                          onClick={handleMenuClick}
                          id="button-account-menu"
                        >
                          <UserAvatar />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Menu
                      anchorEl={anchorEl}
                      open={isMenuOpen}
                      onClose={handleClose}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                      id="account-menu"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "0.25rem",
                          alignItems: "center",
                          my: "5px",
                          paddingInline: "0.5rem",
                          pr: "1rem",
                        }}
                        id="account-menu-user-info-element"
                      >
                        <Avatar
                          alt={
                            props.userData?.firstName +
                            " " +
                            props.userData?.lastName
                          }
                          src={props.userData?.avatarImageUrl}
                          variant="circular"
                        />
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem",
                            paddingLeft: "0.5rem",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            style={{ fontSize: "0.8rem", lineHeight: "0.8rem" }}
                          >
                            {props.userData?.firstName}{" "}
                            {props.userData?.lastName}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            style={{
                              fontSize: "0.7rem",
                              lineHeight: "0.7rem",
                              color: theme.palette.grey[500],
                            }}
                          >
                            {props.userData?.email}
                          </Typography>
                        </Box>
                      </Box>
                      {props.isRendered?.avatarMenuPersonal && (
                        <Divider
                          sx={{
                            marginBlock: "0.125rem",
                          }}
                        />
                      )}
                      {props.isRendered?.avatarMenuPersonal && (
                        <MenuItem
                          onClick={(e) =>
                            handleMenuItemClick(e, props.onPersonalDataClick)
                          }
                          id="account-menu-button-personal-data"
                        >
                          <Icon.user />
                          {props.componentText?.personalData
                            ? props.componentText.personalData
                            : "Personal Data"}
                        </MenuItem>
                      )}
                      {props.isRendered?.avatarMenuPersonal && (
                        <MenuItem
                          onClick={(e) =>
                            handleMenuItemClick(e, props.onSecurityClick)
                          }
                          id="account-menu-button-security"
                        >
                          <Icon.lock />
                          {props.componentText?.security
                            ? props.componentText.security
                            : "Security"}
                        </MenuItem>
                      )}
                      {props.isRendered?.avatarMenuPersonal && (
                        <MenuItem
                          onClick={(e) =>
                            handleMenuItemClick(e, props.onAccountSettingsClick)
                          }
                          id="account-menu-button-account-settings"
                        >
                          <Icon.adjustments />
                          {props.componentText?.accountSettings
                            ? props.componentText.accountSettings
                            : "Account Settings"}
                        </MenuItem>
                      )}
                      {props.isRendered?.avatarMenuPersonal && <Divider />}
                      {props.isRendered?.avatarMenuCompany && (
                        <MenuItem
                          onClick={(e) =>
                            handleMenuItemClick(e, props.onCompanyDataClick)
                          }
                          id="account-menu-button-company"
                        >
                          <Icon.company />
                          {props.componentText?.companyData
                            ? props.componentText.companyData
                            : "Company Data"}
                        </MenuItem>
                      )}
                      {props.isRendered?.avatarMenuCompany && (
                        <MenuItem
                          onClick={(e) =>
                            handleMenuItemClick(e, props.onBankingClick)
                          }
                          id="account-menu-button-banking"
                        >
                          <Icon.creditcard />
                          {props.componentText?.banking
                            ? props.componentText.banking
                            : "Banking Information"}
                        </MenuItem>
                      )}
                      {props.isRendered?.avatarMenuCompany && (
                        <MenuItem
                          onClick={(e) =>
                            handleMenuItemClick(e, props.onTeamManagementClick)
                          }
                          id="account-menu-button-team"
                        >
                          <Icon.userTeam />
                          {props.componentText?.teamManagement
                            ? props.componentText.teamManagement
                            : "Team Management"}
                        </MenuItem>
                      )}
                      {props.isRendered?.avatarMenuCompany && <Divider />}
                      {props.isRendered?.avatarMenuBilling && (
                        <MenuItem
                          onClick={(e) =>
                            handleMenuItemClick(e, props.onBillingClick)
                          }
                          id="account-menu-button-billing"
                        >
                          <Icon.invoice />
                          {props.componentText?.billing
                            ? props.componentText.billing
                            : "Billing"}
                        </MenuItem>
                      )}
                      {props.isRendered?.avatarMenuBilling && <Divider />}
                      {props.isRendered?.avatarMenuLogout && (
                        <MenuItem
                          onClick={(e) =>
                            handleMenuItemClick(e, props.onLogoutClick)
                          }
                          id="account-menu-button-logout"
                        >
                          <Icon.logout />
                          {props.componentText?.logout
                            ? props.componentText.logout
                            : "Logout"}
                        </MenuItem>
                      )}
                    </Menu>
                  </>
                )}
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  },
);

export default CustomAppBar;
