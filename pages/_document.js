import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getDocumentInitialProps } from '@/utils/document'
import theme from '@/utils/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta content={theme?.palette?.primary?.main} name="theme-color" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = getDocumentInitialProps(Document)
