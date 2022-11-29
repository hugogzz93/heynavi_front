import { AppProps } from 'next/app';
// import {Hydrate, QueryClientProvider} from 'react-query'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'
import { baseUrl } from 'api'

import { SessionProvider } from 'next-auth/react'
import '../styles/global.css';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink({
        uri: baseUrl
    })
});

const MyApp = ({ Component, pageProps, session }: AppProps) => { 

    return (
        <SessionProvider session={session}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </SessionProvider>
    )
};

export default MyApp;
