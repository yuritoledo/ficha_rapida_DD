import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider >
      <Component {...pageProps} />
      <CSSReset />
    </ChakraProvider>
  )
}

export default MyApp