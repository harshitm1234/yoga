import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { Box } from '@mui/material'

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: 1202,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}))

export const LayoutBox = styled(Box)(() => ({
  display: 'flex',
}))

export const MainBox = styled(Box)(() => ({
  flexGrow: 1,
}))

export const DrawerHeader = styled(Box)(() => ({
  marginTop: '100px',
  textAlign: 'center',
  cursor: 'pointer',
}))
