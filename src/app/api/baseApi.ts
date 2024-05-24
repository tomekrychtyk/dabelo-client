import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

const apiUrl = import.meta.env.VITE_API_URL || 'https://localhost:5000/graphql';
export const client: any = new GraphQLClient(apiUrl);

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({})
});
