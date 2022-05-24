import React ,{ useState }  from 'react'
import { DrawerHeader, LayoutBox, MainBox } from '@/ui/Styled/Layout'
import AppHeader from '../AppHeader/AppHeader'
import Toaster from '@/ui/Toaster/Toaster'
import AppLayoutContext from './Context'

export default function AppLayout({ children }) {
  const [closeToast, setToastStatus] = useState(false)
  const [toastMessage, setToastMessage] = useState('default')
  const onCloseToast = () => {
    setToastStatus(false)
  }

  const layoutContext = {
    showToastMessage: (message) => {
      setToastStatus(true)
      setToastMessage(message)
    },
    activeSideBarIndex: 0,
  }

  return (
    <AppLayoutContext.Provider value={layoutContext}>
      {toastMessage && (
        <Toaster
          message={toastMessage}
          open={closeToast}
          onClose={onCloseToast}
        />
      )}
      <LayoutBox>
        <AppHeader />
        <MainBox component="main">
          <DrawerHeader />
          {children}
          {/* <Footer /> */}
        </MainBox>
      </LayoutBox>
    </AppLayoutContext.Provider>
  )
}
