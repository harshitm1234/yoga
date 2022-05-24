import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export default function Toaster({
  onClose,
  open,
  autoHideDuration = 5000,
  message,
  anchorOrigin = { vertical: 'top', horizontal: 'center' },
}) {
  const action = (
    <IconButton color="inherit" onClick={onClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  )
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      message={message}
      action={action}
    />
  )
}
