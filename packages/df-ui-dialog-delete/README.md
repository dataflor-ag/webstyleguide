# `@dataflor-ag/df-ui-dialog-delete`

> Info dialog for delete notifications and verifications

## Usage

```tsx
import { DialogDelete } from "@dataflor-ag/df-ui-dialog-delete"
```

The component provides the following props:
 - open: boolean;
 - onClose: (event: React.MouseEvent<HTMLButtonElement>) => void; // function that is executed upon clicking the close-button (left button)
 - onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void // function that is executed upon clicking the delete-button (right button)
 - buttonTextClose: string //  button-text of the left button
 - buttonTextDelete: string // button-text of the right button
 - deleteDisabled?: boolean // variable that determines if the save-button is disabled
 - DialogProps?: DialogProps // Mui Dialog props can be used on the wrapper component (<Dialog/>) 
 - text?: string // text content - first paragraph
 - secondaryText?: string // text content - second paragraph
 - warningBoxText?: string // warning box with text content
 - children?: React.ReactNode // slot inside the component tags for optional custom dialog content
