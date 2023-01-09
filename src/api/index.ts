import { QueryClient } from 'react-query'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const devUrl = "http://localhost:3000/graphql";
const prodUrl = "https://api.heyvali.com/graphql";
export const baseUrl = prodUrl;


// const gqlClient = new GraphQLClient(devUrl)
// export const queryClient = new ApolloClient({
//     ssrMode: true,
//     uri: devUrl,
//     cache: new InMemoryCache(),
// })

export {
    useGetQuestionsQuery,
    useSaveAnswersMutation,
    useGetInvestmentOptionsQuery,
    useUpdateInvestmentOptionMutation,
    useCreateInvestmentOptionMutation,
    useDeleteInvestmentOptionMutation,
} from 'generated/graphql'


// export const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             refetchOnMount: false,
//             refetchOnReconnect: false,
//             refetchOnWindowFocus: false
//         }
//     }
// })
