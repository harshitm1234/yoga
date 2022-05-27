import { Box, Container } from '@mui/material'
import React from 'react'
import AppLayout from '../blocks/common/Layout/AppLayout'
import Image from '@/ui/Image/Image'

function Index() {
  return (
    <AppLayout>
      <Box sx={{height: `calc(100vh - 100px)` }}>
        <Box sx={{ height: '100%' }}>
          <img src={'/dashboard.jpg'} width="100%" height="100%" />
        </Box>
      </Box>
    </AppLayout>
  )
}

export default Index
