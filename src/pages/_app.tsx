import { AppProps } from 'next/app';
// import {Hydrate, QueryClientProvider} from 'react-query'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => { 

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
};

export default MyApp;
