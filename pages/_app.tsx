import {ApolloProvider} from '@apollo/client'
import graphqlClient from '../gql/apollo-client'
import type { AppProps } from 'next/app'
import React from 'react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={graphqlClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
