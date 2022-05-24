import Container from '@mui/material/Container'
import LinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

export const ProgressStyledContainer = styled(Container)(() => ({
  margin: 0,
  padding: 0,
  opacity: (props) => (props.isFinished ? 0 : 1),
  pointerEvents: 'none',
  minWidth: '100%',
  transition: (props) => `opacity ${props.animationDuration}ms linear`,
}))

export const ProgressStyledLinearProgress = styled(LinearProgress)(() => ({
  transitionDuration: (props) => `${props.animationDuration}ms`,
}))
