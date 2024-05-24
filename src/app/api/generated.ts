import { api } from '@/app/api/baseApi';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateDietProductInput = {
  calcium?: InputMaybe<Scalars['Int']['input']>;
  carbs: Scalars['Int']['input'];
  copper?: InputMaybe<Scalars['Int']['input']>;
  fat: Scalars['Int']['input'];
  iron?: InputMaybe<Scalars['Int']['input']>;
  kcal: Scalars['Int']['input'];
  magnesium?: InputMaybe<Scalars['Int']['input']>;
  manganium?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  phosphorus?: InputMaybe<Scalars['Int']['input']>;
  potassium?: InputMaybe<Scalars['Int']['input']>;
  proteins: Scalars['Int']['input'];
  selenium?: InputMaybe<Scalars['Int']['input']>;
  vitA?: InputMaybe<Scalars['Int']['input']>;
  vitB1?: InputMaybe<Scalars['Int']['input']>;
  vitB2?: InputMaybe<Scalars['Int']['input']>;
  vitB3?: InputMaybe<Scalars['Int']['input']>;
  vitB5?: InputMaybe<Scalars['Int']['input']>;
  vitB6?: InputMaybe<Scalars['Int']['input']>;
  vitB7?: InputMaybe<Scalars['Int']['input']>;
  vitB9?: InputMaybe<Scalars['Int']['input']>;
  vitB12?: InputMaybe<Scalars['Int']['input']>;
  vitC?: InputMaybe<Scalars['Int']['input']>;
  vitD?: InputMaybe<Scalars['Int']['input']>;
  vitE?: InputMaybe<Scalars['Int']['input']>;
  vitK?: InputMaybe<Scalars['Int']['input']>;
  zinc?: InputMaybe<Scalars['Int']['input']>;
};

/** dietProduct */
export type DietProduct = {
  __typename?: 'DietProduct';
  calcium?: Maybe<Scalars['Int']['output']>;
  carbs: Scalars['Int']['output'];
  copper?: Maybe<Scalars['Int']['output']>;
  fat: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  iron?: Maybe<Scalars['Int']['output']>;
  kcal: Scalars['Int']['output'];
  magnessium?: Maybe<Scalars['Int']['output']>;
  manganium?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  phosphorus?: Maybe<Scalars['Int']['output']>;
  potassium?: Maybe<Scalars['Int']['output']>;
  proteins: Scalars['Int']['output'];
  selenium?: Maybe<Scalars['Int']['output']>;
  vitA?: Maybe<Scalars['Int']['output']>;
  vitB1?: Maybe<Scalars['Int']['output']>;
  vitB2?: Maybe<Scalars['Int']['output']>;
  vitB3?: Maybe<Scalars['Int']['output']>;
  vitB5?: Maybe<Scalars['Int']['output']>;
  vitB6?: Maybe<Scalars['Int']['output']>;
  vitB7?: Maybe<Scalars['Int']['output']>;
  vitB9?: Maybe<Scalars['Int']['output']>;
  vitB12?: Maybe<Scalars['Int']['output']>;
  vitC?: Maybe<Scalars['Int']['output']>;
  vitD?: Maybe<Scalars['Int']['output']>;
  vitE?: Maybe<Scalars['Int']['output']>;
  vitK?: Maybe<Scalars['Int']['output']>;
  zinc?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDietProduct: DietProduct;
};


export type MutationAddDietProductArgs = {
  CreateDietProductInput: CreateDietProductInput;
};

export type Query = {
  __typename?: 'Query';
  dietProducts: Array<DietProduct>;
};


export type QueryDietProductsArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type DietProductsQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type DietProductsQuery = { __typename?: 'Query', dietProducts: Array<{ __typename?: 'DietProduct', id: string, name: string, vitA?: number | null, vitD?: number | null }> };


export const DietProductsDocument = `
    query DietProducts($name: String) {
  dietProducts(name: $name) {
    id
    name
    vitA
    vitD
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    DietProducts: build.query<DietProductsQuery, DietProductsQueryVariables | void>({
      query: (variables) => ({ document: DietProductsDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useDietProductsQuery, useLazyDietProductsQuery } = injectedRtkApi;

