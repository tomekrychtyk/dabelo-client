import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:5000/graphql',
  documents: './src/**/*.graphql',
  generates: {
    './src/app/api/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        {
          'typescript-rtk-query': {
            importBaseApiFrom: '@/app/api/baseApi',
            exportHooks: true
          }
        }
      ]
    }
  }
};
export default config;
