import { useNProgress } from '@tanem/react-nprogress'
import {
  ProgressStyledContainer,
  ProgressStyledLinearProgress,
} from './ProgressLoader.styles'

function ProgressLoader({ isLoading }) {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isLoading,
  })

  const progressValue = progress * 100

  if (!isLoading || progressValue === 100) {
    return null
  }

  return (
    <ProgressStyledContainer
      isFinished={isFinished}
      animationDuration={animationDuration}
      disableGutters
    >
      <ProgressStyledLinearProgress
        value={progressValue}
        variant="determinate"
        animationDuration={animationDuration}
      />
    </ProgressStyledContainer>
  )
}

export default ProgressLoader
