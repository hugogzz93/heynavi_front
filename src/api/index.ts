import { GraphQLClient } from "graphql-request";
import { QueryClient } from 'react-query'
import { getSdk } from "../generated/graphql";

const devUrl = "http://localhost:3000/graphql";
const prodUrl = "https://api.navibase.io/graphql";
export const baseUrl = devUrl;

const gqlClient = new GraphQLClient(devUrl)

export const {
    GetQuestions,
    SaveAnswers,
    GetInvestmentOptions,
    UpdateInvestmentOption,
    CreateInvestmentOption,
    DeleteInvestmentOption,
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
