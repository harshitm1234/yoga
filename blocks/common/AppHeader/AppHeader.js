import BrandingLogo from '../BrandingLogo/BrandingLogo'

import Header from '@/ui/Styled/Header'
import Separator from '@/ui/Styled/Separator'
import { AppBar } from '@/ui/Styled/Layout'
import TopNavigation from '@/blocks/TopNavigation/TopNavigation'

export default function AppHeader({ open = false }) {
  return (
    <AppBar color="default" position="fixed" open={open}>
      <Header>
        <Separator />
        <BrandingLogo />
        <TopNavigation/>
      </Header>
    </AppBar>
  )
}
