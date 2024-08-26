import { renderAppBar } from "./CustomAppBar/CustomAppBarInterop"

export * from "./CustomAppBar/CustomAppBarInterop"
export * from "@dataflor-ag/df-ui-custom-app-bar"

console.log("running index");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).renderAppBar = renderAppBar

