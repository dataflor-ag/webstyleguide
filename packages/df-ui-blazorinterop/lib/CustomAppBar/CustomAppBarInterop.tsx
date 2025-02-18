import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  CustomAppBar,
  type CustomAppBarProps,
} from "@dataflor-ag/df-ui-custom-app-bar";

export type InteropCustomAppBarProps = Omit<
  CustomAppBarProps,
  | "onDarkmodeClick"
  | "onLogoClick"
  | "onTasksClick"
  | "onSettingsClick"
  | "onChangeCompanyClick"
  | "onPersonalDataClick"
  | "onSecurityClick"
  | "onAccountSettingsClick"
  | "onCompanyDataClick"
  | "onBankingClick"
  | "onTeamManagementClick"
  | "onDeviceManagementClick"
  | "onRoleManagementClick"
  | "onBillingClick"
  | "onLogoutClick"
  | "onLanguageMenuClickDE"
  | "onLanguageMenuClickEN"
  | "onLanguageMenuClickNL"
  | "onLanguageMenuClickIT"
  | "onCompanyInviteClick"
> & {
  assemblyName: string;
  onLogoClick?: string;
  onDarkmodeClick?: string;
  onTasksClick?: string;
  onSettingsClick?: string;
  onChangeCompanyClick?: string;
  onPersonalDataClick?: string;
  onSecurityClick?: string;
  onAccountSettingsClick?: string;
  onCompanyDataClick?: string;
  onBankingClick?: string;
  onTeamManagementClick?: string;
  onDeviceManagementClick?: string;
  onRoleManagementClick?: string;
  onBillingClick?: string;
  onLogoutClick?: string;
  onLanguageMenuClickDE?: string;
  onLanguageMenuClickEN?: string;
  onLanguageMenuClickNL?: string;
  onLanguageMenuClickIT?: string;
  onCompanyInviteClick?: string;
};

const wrapInInterop = (assemblyName: string, functionName: string) => {
  return () =>
    (globalThis as any).DotNet.invokeMethodAsync(assemblyName, functionName);
};

export const renderAppBar = (
  containerId: string,
  props: InteropCustomAppBarProps,
  logConfig: boolean,
) => {
  if (logConfig) console.log(JSON.stringify(props));

  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  const {
    assemblyName,
    onLogoClick,
    onDarkmodeClick,
    onTasksClick,
    onSettingsClick,
    onChangeCompanyClick,
    onPersonalDataClick,
    onSecurityClick,
    onAccountSettingsClick,
    onCompanyDataClick,
    onBankingClick,
    onTeamManagementClick,
    onDeviceManagementClick,
    onRoleManagementClick,
    onBillingClick,
    onLogoutClick,
    onLanguageMenuClickDE,
    onLanguageMenuClickEN,
    onLanguageMenuClickNL,
    onLanguageMenuClickIT,
    onCompanyInviteClick,
    ...rest
  } = props;

  const customAppBarProps: CustomAppBarProps = {
    ...rest,
    onDarkmodeClick: onDarkmodeClick
      ? wrapInInterop(assemblyName, onDarkmodeClick)
      : undefined,
    onLogoClick: onLogoClick
      ? wrapInInterop(assemblyName, onLogoClick)
      : undefined,
    onTasksClick: onTasksClick
      ? wrapInInterop(assemblyName, onTasksClick)
      : undefined,
    onSettingsClick: onSettingsClick
      ? wrapInInterop(assemblyName, onSettingsClick)
      : undefined,
    onChangeCompanyClick: onChangeCompanyClick
      ? wrapInInterop(assemblyName, onChangeCompanyClick)
      : undefined,
    onPersonalDataClick: onPersonalDataClick
      ? wrapInInterop(assemblyName, onPersonalDataClick)
      : undefined,
    onSecurityClick: onSecurityClick
      ? wrapInInterop(assemblyName, onSecurityClick)
      : undefined,
    onAccountSettingsClick: onAccountSettingsClick
      ? wrapInInterop(assemblyName, onAccountSettingsClick)
      : undefined,
    onCompanyDataClick: onCompanyDataClick
      ? wrapInInterop(assemblyName, onCompanyDataClick)
      : undefined,
    onBankingClick: onBankingClick
      ? wrapInInterop(assemblyName, onBankingClick)
      : undefined,
    onTeamManagementClick: onTeamManagementClick
      ? wrapInInterop(assemblyName, onTeamManagementClick)
      : undefined,
    onDeviceManagementClick: onDeviceManagementClick
      ? wrapInInterop(assemblyName, onDeviceManagementClick)
      : undefined,
    onRoleManagementClick: onRoleManagementClick
      ? wrapInInterop(assemblyName, onRoleManagementClick)
      : undefined,
    onBillingClick: onBillingClick
      ? wrapInInterop(assemblyName, onBillingClick)
      : undefined,
    onLogoutClick: onLogoutClick
      ? wrapInInterop(assemblyName, onLogoutClick)
      : undefined,
    onLanguageMenuClickDE: onLanguageMenuClickDE
      ? wrapInInterop(assemblyName, onLanguageMenuClickDE)
      : undefined,
    onLanguageMenuClickEN: onLanguageMenuClickEN
      ? wrapInInterop(assemblyName, onLanguageMenuClickEN)
      : undefined,
    onLanguageMenuClickNL: onLanguageMenuClickNL
      ? wrapInInterop(assemblyName, onLanguageMenuClickNL)
      : undefined,
    onLanguageMenuClickIT: onLanguageMenuClickIT
      ? wrapInInterop(assemblyName, onLanguageMenuClickIT)
      : undefined,
    onCompanyInviteClick: onCompanyInviteClick
      ? wrapInInterop(assemblyName, onCompanyInviteClick)
      : undefined,
  };

  createRoot(container).render(
    <StrictMode>
      <CustomAppBar {...customAppBarProps} />
    </StrictMode>,
  );
};
