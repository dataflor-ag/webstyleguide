import React, { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import { CustomAppBar, type CustomAppBarProps } from "@dataflor-ag/df-ui-custom-app-bar"

export type InteropCustomAppBarProps = Omit<CustomAppBarProps, "onLogoClick" |
  "onTasksClick" |
  "onSettingsClick" |
  "onPersonalDataClick" |
  "onSecurityClick" |
  "onAccountSettingsClick" |
  "onCompanyDataClick" |
  "onBankingClick" |
  "onTeamManagementClick" |
  "onRoleManagementClick" |
  "onBillingClick" |
  "onLogoutClick"
  > & {
  assemblyName: string,
  onLogoClick?: string,
  onTasksClick?: string,
  onSettingsClick?: string,
  onPersonalDataClick?: string,
  onSecurityClick?: string,
  onAccountSettingsClick?: string,
  onCompanyDataClick?: string,
  onBankingClick?: string,
  onTeamManagementClick?: string,
  onRoleManagementClick?: string,
  onBillingClick?: string,
  onLogoutClick?: string,
  }

const wrapInInterop = (assemblyName: string, functionName: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return () => (globalThis as any).DotNet.invokeMethodAsync(assemblyName, functionName)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const renderAppBar = (containerId: string, props: InteropCustomAppBarProps) => {
  const container = document.getElementById(containerId)
  if (!container) {
    return
  }

  const { assemblyName, onLogoClick, onTasksClick, onSettingsClick, onPersonalDataClick, onSecurityClick, onAccountSettingsClick, onCompanyDataClick, onBankingClick, onTeamManagementClick, onRoleManagementClick, onBillingClick, onLogoutClick, ...rest } = props

  const customAppBarProps: CustomAppBarProps = {
    ...rest,
    onLogoClick: onLogoClick ? wrapInInterop(assemblyName, onLogoClick) : undefined,
    onTasksClick: onTasksClick ? wrapInInterop(assemblyName, onTasksClick) : undefined,
    onSettingsClick: onSettingsClick ? wrapInInterop(assemblyName, onSettingsClick) : undefined,
    onPersonalDataClick: onPersonalDataClick ? wrapInInterop(assemblyName, onPersonalDataClick) : undefined,
    onSecurityClick: onSecurityClick ? wrapInInterop(assemblyName, onSecurityClick) : undefined,
    onAccountSettingsClick: onAccountSettingsClick ? wrapInInterop(assemblyName, onAccountSettingsClick) : undefined,
    onCompanyDataClick: onCompanyDataClick ? wrapInInterop(assemblyName, onCompanyDataClick) : undefined,
    onBankingClick: onBankingClick ? wrapInInterop(assemblyName, onBankingClick) : undefined,
    onTeamManagementClick: onTeamManagementClick ? wrapInInterop(assemblyName, onTeamManagementClick) : undefined,
    onRoleManagementClick: onRoleManagementClick ? wrapInInterop(assemblyName, onRoleManagementClick) : undefined,
    onBillingClick: onBillingClick ? wrapInInterop(assemblyName, onBillingClick) : undefined,
    onLogoutClick: onLogoutClick ? wrapInInterop(assemblyName, onLogoutClick) : undefined,
  }

  createRoot(container).render(<StrictMode>
        <CustomAppBar {...customAppBarProps}/>
        </StrictMode>)

}