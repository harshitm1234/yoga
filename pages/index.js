import { Box, Container } from '@mui/material'
import React from 'react'
import AppLayout from '../blocks/common/Layout/AppLayout'
import Image from '@/ui/Image/Image'

function Index() {
  return (
    <AppLayout>
      <Box style={{ height: '100vh' }}>
        <Box sx={{ my: 4, height: '100%' }}>
          <Image src={'dashboard.jpg'} width="1520px" height="900px" />
        </Box>
      </Box>
    </AppLayout>
  )
}

export default Index
