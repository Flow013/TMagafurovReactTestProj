module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  plugins: ['react-refresh', 'prettier', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    typescript: true,
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  // "settings": {
  //   "import/parsers": {
  //     "@typescript-eslint/parser": [".ts", ".tsx"]
  //   },
  //   "import/resolver": {
  //     "typescript": {
  //       "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

  //       // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

  //       // use <root>/path/to/folder/tsconfig.json
  //       "project": __dirname,

  //       // Multiple tsconfigs (Useful for monorepos)

  //       // use a glob pattern
  //       "project": "./tsconfig.json",

  //       // use an array
  //       "project": [
  //         "packages/module-a/tsconfig.json",
  //         "packages/module-b/tsconfig.json"
  //       ],

  //       // use an array of glob patterns
  //       "project": [
  //         "packages/*/tsconfig.json",
  //         "other-packages/*/tsconfig.json"
  //       ]
  //     }
  //   }
  // },
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        semi: false,
        tabWidth: 2,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        trailingComma: 'none',
        endOfLine: 'auto',
      },
    ],
  },
}
