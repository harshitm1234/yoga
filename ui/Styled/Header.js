import { styled } from '@mui/material/styles'

const Header = styled('header')(({ theme }) => ({
  ...theme.typography.body2,
  width: '100%',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  background: 'rgb(173, 216, 230)',
  boxShadow: 'none',
}))

export default Header
