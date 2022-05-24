import Image from '@/ui/Image/Image'
import { styled } from '@mui/material/styles'

const LogoImage = styled('i')`
  padding: 0;
  display: inline-flex;
  height: 100%;
  width: 10rem;
`

export default function BrandingLogo() {
  return (
    <LogoImage>
      <Image src={'logo.png'} width="100%" height="100%" />
    </LogoImage>
  )
}
