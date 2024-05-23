import type { CustomShadows } from "../types/Shadow";
import { dark as palette } from "../palettes/dark";

const customShadowBase = `0 0 0 1px ${palette.grey?.[200]}`;
const customShadowFocus = `0 0 0 1px ${palette.grey?.[300]}, 0 0 0 4px rgba(255,255,255, 0.1)`;
const customShadowError = `0 0 0 1px ${palette.error?.[800]}`;
const customShadowErrorFocus = `0 0 0 1px ${palette.error?.[800]}, 0 0 0 4px ${palette.error?.[900]}`;
const customShadowPrimary = `0 0 0 1px ${palette.primary?.[500]}`;
const customShadowPrimaryFocus = `0 0 0 1px ${palette.primary?.[600]}, 0 0 0 4px ${palette.primary?.[200]}`;
const customShadowSecondary = `0 0 0 1px rgb(255,255,255)`;
const customShadowSecondaryFocus = `0 0 0 1px rgb(255,255,255), 0 0 0 4px rgba(255,255,255, 0.2)`;

const customShadowXs = `0 1px 3px 0 rgba(0,0,0,0.25), 0 1px 2px -1px rgba(0,0,0,0.50)`;
const customShadowSm = `0 2px 3px 0 rgba(0,0,0,0.25), 0 1px 2px -1px rgba(0,0,0,0.50)`;
const customShadowMd = `0 4px 8px -2px rgba(0,0,0,0.25), 0 2px 4px 0 rgba(0,0,0,0.50)`;
const customShadowLg = `0 12px 16px -4px rgba(0,0,0,0.25), 0 4px 6px -2px rgba(0,0,0,0.30)`;
const customShadowXl = `0 8px 24px 0 rgba(0,0,0,0.25), 0 24px 48px -12px rgba(0,0,0,0.50)`;
const customShadow2xl = `0 24px 48px -12px rgba(0,0,0,0.40)`;
const customShadow3xl = `0 24px 48px -12px rgba(0,0,0,0.40)`;

export const dark: CustomShadows = {
  xs: {
    base: `${customShadowXs}, ${customShadowBase}`,
    focus: `${customShadowXs}, ${customShadowFocus}`,
    error: `${customShadowXs}, ${customShadowError}`,
    errorFocus: `${customShadowXs}, ${customShadowErrorFocus}`,
    primary: `${customShadowXs}, ${customShadowPrimary}`,
    primaryFocus: `${customShadowXs}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadowXs}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadowXs}, ${customShadowSecondaryFocus}`,
  },
  sm: {
    base: `${customShadowSm}, ${customShadowBase}`,
    focus: `${customShadowSm}, ${customShadowFocus}`,
    error: `${customShadowSm}, ${customShadowError}`,
    errorFocus: `${customShadowSm}, ${customShadowErrorFocus}`,
    primary: `${customShadowSm}, ${customShadowPrimary}`,
    primaryFocus: `${customShadowSm}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadowSm}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadowSm}, ${customShadowSecondaryFocus}`,
  },
  md: {
    base: `${customShadowMd}, ${customShadowBase}`,
    focus: `${customShadowMd}, ${customShadowFocus}`,
    error: `${customShadowMd}, ${customShadowError}`,
    errorFocus: `${customShadowMd}, ${customShadowErrorFocus}`,
    primary: `${customShadowMd}, ${customShadowPrimary}`,
    primaryFocus: `${customShadowMd}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadowMd}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadowMd}, ${customShadowSecondaryFocus}`,
  },
  lg: {
    base: `${customShadowLg}, ${customShadowBase}`,
    focus: `${customShadowLg}, ${customShadowFocus}`,
    error: `${customShadowLg}, ${customShadowError}`,
    errorFocus: `${customShadowLg}, ${customShadowErrorFocus}`,
    primary: `${customShadowLg}, ${customShadowPrimary}`,
    primaryFocus: `${customShadowLg}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadowLg}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadowLg}, ${customShadowSecondaryFocus}`,
  },
  xl: {
    base: `${customShadowXl}, ${customShadowBase}`,
    focus: `${customShadowXl}, ${customShadowFocus}`,
    error: `${customShadowXl}, ${customShadowError}`,
    errorFocus: `${customShadowXl}, ${customShadowErrorFocus}`,
    primary: `${customShadowXl}, ${customShadowPrimary}`,
    primaryFocus: `${customShadowXl}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadowXl}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadowXl}, ${customShadowSecondaryFocus}`,
  },
  "2xl": {
    base: `${customShadow2xl}, ${customShadowBase}`,
    focus: `${customShadow2xl}, ${customShadowFocus}`,
    error: `${customShadow2xl}, ${customShadowError}`,
    errorFocus: `${customShadow2xl}, ${customShadowErrorFocus}`,
    primary: `${customShadow2xl}, ${customShadowPrimary}`,
    primaryFocus: `${customShadow2xl}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadow2xl}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadow2xl}, ${customShadowSecondaryFocus}`,
  },
  "3xl": {
    base: `${customShadow3xl}, ${customShadowBase}`,
    focus: `${customShadow3xl}, ${customShadowFocus}`,
    error: `${customShadow3xl}, ${customShadowError}`,
    errorFocus: `${customShadow3xl}, ${customShadowErrorFocus}`,
    primary: `${customShadow3xl}, ${customShadowPrimary}`,
    primaryFocus: `${customShadow3xl}, ${customShadowPrimaryFocus}`,
    secondary: `${customShadow3xl}, ${customShadowSecondary}`,
    secondaryFocus: `${customShadow3xl}, ${customShadowSecondaryFocus}`,
  },
};
