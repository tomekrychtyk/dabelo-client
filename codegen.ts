import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:5000/graphql',
  generates: {
    './src/api/generated.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        {
          'typescript-rtk-query': {
            importBaseApiFrom: './baseApi',
            importBaseApiAlternateName: 'baseApiWithGraphql',
            exportHooks: true
          }
        }
      ]
    }
  }
};

export default config;
