# `@dataflor-ag/df-ui-dialog-header`

> dialog for creating or editing data

## Usage

```tsx
import { DialogCreateEdit } from "@dataflor-ag/df-ui-dialog-header"
```

The component provides the following props:
- title: string // dialog-title
- icon?: React.ReactNode // dialog-icon
- open: boolean // variable to determine if the dialog is rendered
- children?: React.ReactNode; // dialog-content between the opening and closing tags
- onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void // function that is executed upon clicking the close-button (left button)
- onSave?: (event: React.MouseEvent<HTMLButtonElement>) => void // function that is executed upon clicking the save-button (right button)
- buttonTextClose?: string // button-text of the left button
- buttonTextSave?: string, // button-text of the right button
- maxWidth?: Breakpoint // max-width of the component (default: xs)
- saveDisabled?: boolean // variable that determines if the save-button is disabled