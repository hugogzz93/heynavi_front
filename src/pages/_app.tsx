import { AppProps } from 'next/app';
// import {Hydrate, QueryClientProvider} from 'react-query'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'
import { baseUrl } from 'api'

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => { 

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink({
        uri: baseUrl
    })
});

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
};

export default MyApp;
