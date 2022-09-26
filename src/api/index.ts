import { GraphQLClient } from "graphql-request";
import { QueryClient } from 'react-query'
import { getSdk } from "../generated/graphql";

const gqlClient = new GraphQLClient("http://localhost:3000/graphql")
export const {
    GetQuestions,
    SaveAnswers
} = getSdk(gqlClient)

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
        }
    }
})
