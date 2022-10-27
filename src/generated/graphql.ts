import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID'];
  questionId: Scalars['ID'];
  text: Scalars['String'];
};

export type ClientQuestionAnswer = {
  __typename?: 'ClientQuestionAnswer';
  answerId: Scalars['ID'];
  clientId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  questionId: Scalars['ID'];
  userId?: Maybe<Scalars['String']>;
};

export type ClientQuestionAnswerInput = {
  answerId?: InputMaybe<Scalars['ID']>;
  clientId?: InputMaybe<Scalars['ID']>;
  customValue?: InputMaybe<Scalars['ID']>;
  questionId: Scalars['ID'];
};

/** Autogenerated return type of CreateInvestmentOptionMutation */
export type CreateInvestmentOptionMutationPayload = {
  __typename?: 'CreateInvestmentOptionMutationPayload';
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteInvestmentOptionMutation */
export type DeleteInvestmentOptionMutationPayload = {
  __typename?: 'DeleteInvestmentOptionMutationPayload';
  status: Scalars['Boolean'];
};

export type FileLink = {
  __typename?: 'FileLink';
  attachmentId?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type InvestmentOption = {
  __typename?: 'InvestmentOption';
  apertura: Scalars['String'];
  descripcion: Scalars['String'];
  fijaVariable: Scalars['String'];
  generales: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<FileLink>;
  montoMin: Scalars['String'];
  nombre: Scalars['String'];
  recurrencia: Scalars['String'];
  rentabilidad: Scalars['String'];
  respaldado: Scalars['String'];
  riesgo: Scalars['String'];
  tiempo: Scalars['String'];
  tipo: Scalars['String'];
};

export type InvestmentOptionInput = {
  apertura?: InputMaybe<Scalars['String']>;
  descripcion?: InputMaybe<Scalars['String']>;
  fijaVariable?: InputMaybe<Scalars['String']>;
  generales?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  montoMin?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  recurrencia?: InputMaybe<Scalars['String']>;
  rentabilidad?: InputMaybe<Scalars['String']>;
  respaldado?: InputMaybe<Scalars['String']>;
  riesgo?: InputMaybe<Scalars['String']>;
  tiempo?: InputMaybe<Scalars['String']>;
  tipo?: InputMaybe<Scalars['String']>;
};

export type InvestmentOptionQuery = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createInvestmentOption?: Maybe<CreateInvestmentOptionMutationPayload>;
  deleteInvestmentOption?: Maybe<DeleteInvestmentOptionMutationPayload>;
  saveAnswer?: Maybe<SaveAnswerPayload>;
  updateInvestmentOption?: Maybe<UpdateInvestmentOptionMutationPayload>;
};


export type MutationCreateInvestmentOptionArgs = {
  input: InvestmentOptionInput;
};


export type MutationDeleteInvestmentOptionArgs = {
  id: Scalars['ID'];
};


export type MutationSaveAnswerArgs = {
  answers: Array<ClientQuestionAnswerInput>;
};


export type MutationUpdateInvestmentOptionArgs = {
  id: Scalars['ID'];
  input: InvestmentOptionInput;
};

export type Query = {
  __typename?: 'Query';
  investmentOptions: Array<InvestmentOption>;
  questions: Array<Question>;
};


export type QueryInvestmentOptionsArgs = {
  query?: InputMaybe<InvestmentOptionQuery>;
};

export type Question = {
  __typename?: 'Question';
  answers?: Maybe<Array<Answer>>;
  id: Scalars['ID'];
  max?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['String']>;
  questionType: Scalars['String'];
  text: Scalars['String'];
};

/** Autogenerated return type of SaveAnswer */
export type SaveAnswerPayload = {
  __typename?: 'SaveAnswerPayload';
  answers: Array<ClientQuestionAnswer>;
};

/** Autogenerated return type of UpdateInvestmentOptionMutation */
export type UpdateInvestmentOptionMutationPayload = {
  __typename?: 'UpdateInvestmentOptionMutationPayload';
  id: Scalars['ID'];
};

export type CreateInvestmentOptionMutationVariables = Exact<{
  input: InvestmentOptionInput;
}>;


export type CreateInvestmentOptionMutation = { __typename?: 'Mutation', createInvestmentOption?: { __typename?: 'CreateInvestmentOptionMutationPayload', id: string } | null };

export type DeleteInvestmentOptionMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteInvestmentOptionMutation = { __typename?: 'Mutation', deleteInvestmentOption?: { __typename?: 'DeleteInvestmentOptionMutationPayload', status: boolean } | null };

export type GetInvestmentOptionsQueryVariables = Exact<{
  query?: InputMaybe<InvestmentOptionQuery>;
}>;


export type GetInvestmentOptionsQuery = { __typename?: 'Query', investmentOptions: Array<{ __typename?: 'InvestmentOption', id: string, tipo: string, nombre: string, descripcion: string, rentabilidad: string, riesgo: string, tiempo: string, montoMin: string, recurrencia: string, generales: string, fijaVariable: string, respaldado: string, apertura: string, image?: { __typename?: 'FileLink', link?: string | null } | null }> };

export type UpdateInvestmentOptionMutationVariables = Exact<{
  input: InvestmentOptionInput;
  id: Scalars['ID'];
}>;


export type UpdateInvestmentOptionMutation = { __typename?: 'Mutation', updateInvestmentOption?: { __typename?: 'UpdateInvestmentOptionMutationPayload', id: string } | null };

export type GetQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuestionsQuery = { __typename?: 'Query', questions: Array<{ __typename?: 'Question', id: string, text: string, questionType: string, min?: string | null, max?: string | null, answers?: Array<{ __typename?: 'Answer', id: string, text: string }> | null }> };

export type SaveAnswersMutationVariables = Exact<{
  input: Array<ClientQuestionAnswerInput> | ClientQuestionAnswerInput;
}>;


export type SaveAnswersMutation = { __typename?: 'Mutation', saveAnswer?: { __typename?: 'SaveAnswerPayload', answers: Array<{ __typename?: 'ClientQuestionAnswer', id: string, userId?: string | null }> } | null };


export const CreateInvestmentOptionDocument = gql`
    mutation CreateInvestmentOption($input: InvestmentOptionInput!) {
  createInvestmentOption(input: $input) {
    id
  }
}
    `;
export type CreateInvestmentOptionMutationFn = Apollo.MutationFunction<CreateInvestmentOptionMutation, CreateInvestmentOptionMutationVariables>;

/**
 * __useCreateInvestmentOptionMutation__
 *
 * To run a mutation, you first call `useCreateInvestmentOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInvestmentOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInvestmentOptionMutation, { data, loading, error }] = useCreateInvestmentOptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInvestmentOptionMutation(baseOptions?: Apollo.MutationHookOptions<CreateInvestmentOptionMutation, CreateInvestmentOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInvestmentOptionMutation, CreateInvestmentOptionMutationVariables>(CreateInvestmentOptionDocument, options);
      }
export type CreateInvestmentOptionMutationHookResult = ReturnType<typeof useCreateInvestmentOptionMutation>;
export type CreateInvestmentOptionMutationResult = Apollo.MutationResult<CreateInvestmentOptionMutation>;
export type CreateInvestmentOptionMutationOptions = Apollo.BaseMutationOptions<CreateInvestmentOptionMutation, CreateInvestmentOptionMutationVariables>;
export const DeleteInvestmentOptionDocument = gql`
    mutation DeleteInvestmentOption($id: ID!) {
  deleteInvestmentOption(id: $id) {
    status
  }
}
    `;
export type DeleteInvestmentOptionMutationFn = Apollo.MutationFunction<DeleteInvestmentOptionMutation, DeleteInvestmentOptionMutationVariables>;

/**
 * __useDeleteInvestmentOptionMutation__
 *
 * To run a mutation, you first call `useDeleteInvestmentOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInvestmentOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInvestmentOptionMutation, { data, loading, error }] = useDeleteInvestmentOptionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteInvestmentOptionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteInvestmentOptionMutation, DeleteInvestmentOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteInvestmentOptionMutation, DeleteInvestmentOptionMutationVariables>(DeleteInvestmentOptionDocument, options);
      }
export type DeleteInvestmentOptionMutationHookResult = ReturnType<typeof useDeleteInvestmentOptionMutation>;
export type DeleteInvestmentOptionMutationResult = Apollo.MutationResult<DeleteInvestmentOptionMutation>;
export type DeleteInvestmentOptionMutationOptions = Apollo.BaseMutationOptions<DeleteInvestmentOptionMutation, DeleteInvestmentOptionMutationVariables>;
export const GetInvestmentOptionsDocument = gql`
    query GetInvestmentOptions($query: InvestmentOptionQuery) {
  investmentOptions(query: $query) {
    id
    tipo
    nombre
    descripcion
    rentabilidad
    riesgo
    tiempo
    montoMin
    recurrencia
    generales
    fijaVariable
    respaldado
    apertura
    image {
      link
    }
  }
}
    `;

/**
 * __useGetInvestmentOptionsQuery__
 *
 * To run a query within a React component, call `useGetInvestmentOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvestmentOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvestmentOptionsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetInvestmentOptionsQuery(baseOptions?: Apollo.QueryHookOptions<GetInvestmentOptionsQuery, GetInvestmentOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInvestmentOptionsQuery, GetInvestmentOptionsQueryVariables>(GetInvestmentOptionsDocument, options);
      }
export function useGetInvestmentOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInvestmentOptionsQuery, GetInvestmentOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInvestmentOptionsQuery, GetInvestmentOptionsQueryVariables>(GetInvestmentOptionsDocument, options);
        }
export type GetInvestmentOptionsQueryHookResult = ReturnType<typeof useGetInvestmentOptionsQuery>;
export type GetInvestmentOptionsLazyQueryHookResult = ReturnType<typeof useGetInvestmentOptionsLazyQuery>;
export type GetInvestmentOptionsQueryResult = Apollo.QueryResult<GetInvestmentOptionsQuery, GetInvestmentOptionsQueryVariables>;
export const UpdateInvestmentOptionDocument = gql`
    mutation UpdateInvestmentOption($input: InvestmentOptionInput!, $id: ID!) {
  updateInvestmentOption(id: $id, input: $input) {
    id
  }
}
    `;
export type UpdateInvestmentOptionMutationFn = Apollo.MutationFunction<UpdateInvestmentOptionMutation, UpdateInvestmentOptionMutationVariables>;

/**
 * __useUpdateInvestmentOptionMutation__
 *
 * To run a mutation, you first call `useUpdateInvestmentOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInvestmentOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInvestmentOptionMutation, { data, loading, error }] = useUpdateInvestmentOptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateInvestmentOptionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInvestmentOptionMutation, UpdateInvestmentOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInvestmentOptionMutation, UpdateInvestmentOptionMutationVariables>(UpdateInvestmentOptionDocument, options);
      }
export type UpdateInvestmentOptionMutationHookResult = ReturnType<typeof useUpdateInvestmentOptionMutation>;
export type UpdateInvestmentOptionMutationResult = Apollo.MutationResult<UpdateInvestmentOptionMutation>;
export type UpdateInvestmentOptionMutationOptions = Apollo.BaseMutationOptions<UpdateInvestmentOptionMutation, UpdateInvestmentOptionMutationVariables>;
export const GetQuestionsDocument = gql`
    query GetQuestions {
  questions {
    id
    text
    questionType
    min
    max
    answers {
      id
      text
    }
  }
}
    `;

/**
 * __useGetQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
      }
export function useGetQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
        }
export type GetQuestionsQueryHookResult = ReturnType<typeof useGetQuestionsQuery>;
export type GetQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuestionsLazyQuery>;
export type GetQuestionsQueryResult = Apollo.QueryResult<GetQuestionsQuery, GetQuestionsQueryVariables>;
export const SaveAnswersDocument = gql`
    mutation SaveAnswers($input: [ClientQuestionAnswerInput!]!) {
  saveAnswer(answers: $input) {
    answers {
      id
      userId
    }
  }
}
    `;
export type SaveAnswersMutationFn = Apollo.MutationFunction<SaveAnswersMutation, SaveAnswersMutationVariables>;

/**
 * __useSaveAnswersMutation__
 *
 * To run a mutation, you first call `useSaveAnswersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveAnswersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveAnswersMutation, { data, loading, error }] = useSaveAnswersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSaveAnswersMutation(baseOptions?: Apollo.MutationHookOptions<SaveAnswersMutation, SaveAnswersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveAnswersMutation, SaveAnswersMutationVariables>(SaveAnswersDocument, options);
      }
export type SaveAnswersMutationHookResult = ReturnType<typeof useSaveAnswersMutation>;
export type SaveAnswersMutationResult = Apollo.MutationResult<SaveAnswersMutation>;
export type SaveAnswersMutationOptions = Apollo.BaseMutationOptions<SaveAnswersMutation, SaveAnswersMutationVariables>;