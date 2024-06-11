import Button from '@mui/material/Button'
import { PickersActionBarProps } from '@mui/x-date-pickers/PickersActionBar'

function datePickerActionBar(props: PickersActionBarProps) {
  const { onAccept, onCancel, onClear, actions = [] } = props

  return (
    <div className='datePickerActionBar'>
      {actions.includes('clear') && (
        <Button onClick={onClear}>
          Clear
        </Button>
      )}
      {actions.includes('cancel') && (
        <Button
          onClick={onCancel}
          variant="outlined"
          color="secondary"
        >
          Cancel
        </Button>
      )}
      {actions.includes('accept') && (
        <Button
          onClick={onAccept}
          variant="contained"
          color="primary"
        >
          Apply
        </Button>
      )}
    </div>
  )
}

export default datePickerActionBar
