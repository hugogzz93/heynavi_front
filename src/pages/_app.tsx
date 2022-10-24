import { AppProps } from 'next/app';
// import {Hydrate, QueryClientProvider} from 'react-query'
import { ApolloProvider } from '@apollo/client'

import '../styles/global.css';
import { queryClient } from '../api'

const MyApp = ({ Component, pageProps }: AppProps) => (

    <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
    </QueryClientProvider>
);

export default MyApp;
