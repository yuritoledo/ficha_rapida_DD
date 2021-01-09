/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Ficha rápida D&D 5e</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ChakraProvider>
        <Component {...pageProps} />
        <CSSReset />
      </ChakraProvider>
    </div>
  )
}

export default MyApp
