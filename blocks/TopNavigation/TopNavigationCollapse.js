import React from 'react'
import { styled } from '@mui/material/styles'
import { Menu } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MoreHoriz from '@mui/icons-material/MoreHoriz'

const StyledTopNavigationCollapse = styled('div')`
  display: none;
  margin: 10px;
  boxshadow: none;
  @media (max-width: 768px) {
    display: block;
  }
`

class TopNavigationCollapse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    }
    this.handleMenu = this.handleMenu.bind(this)
  }
  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }
  handleClose = () => {
    this.setState({ anchorEl: null })
  }
  render() {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <StyledTopNavigationCollapse>
        <IconButton style={{ width: '50px' }} onClick={this.handleMenu}>
          <MoreHoriz />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          {this.props.children}
        </Menu>
      </StyledTopNavigationCollapse>
    )
  }
}
export default TopNavigationCollapse
