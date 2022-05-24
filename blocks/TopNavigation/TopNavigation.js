import React from 'react'
import { Button, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import TopNavigationCollapse from './TopNavigationCollapse'

const StyledTopNavigation = styled('div')`
  position: absolute;
  right: 0;
`

const StyledButtonBar = styled('div')`
  ${({ theme }) => `
    margin: 10px;
    paddingLeft: 16px;
    right: 0;
    position: relative;
    width: 100%;
    background: transparent;
    @media (max-width: 768px) {
        display: none;
    }
`}
`

const TopNavigation = (props) => (
  <StyledTopNavigation>
    <TopNavigationCollapse>
      <MenuItem>HOME</MenuItem>
      <MenuItem>ABOUT</MenuItem>
      <MenuItem>ONLINE COURSES</MenuItem>
    </TopNavigationCollapse>
    <StyledButtonBar id="appbar-collapse">
      <Button color="inherit">HOME</Button>
      <Button color="inherit">ABOUT</Button>
      <Button color="inherit">ONLINE COURSES</Button>
    </StyledButtonBar>
  </StyledTopNavigation>
)

export default TopNavigation
