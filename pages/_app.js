import React, { useState } from 'react'

import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

// components
import ProgressLoader from '@/blocks/common/ProgressLoader'

// hooks
import useRoutingInfo from '@/hooks/useRoutingInfo'
// utils
import theme from '@/utils/theme'
import '../styles/header.css'

function MyBridge(props) {
  const route = useRoutingInfo()
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  )
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Bridge To The Soul</title>
        <meta name="description" content="PulsESG Calculators App" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>

      <ProgressLoader isLoading={route.isLoading} key={route.loadingKey} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default appWithTranslation(MyBridge)
