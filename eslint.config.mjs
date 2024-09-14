import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";


export default [

  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    files: ["**/*.ts"],
    rules: {
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'private-instance-field',
            'private-static-field',
            'public-static-field',
            'protected-static-field',
            'public-instance-field',
            'protected-instance-field',
            'constructor',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      "unused-imports/no-unused-imports": "error",
      '@typescript-eslint/no-empty-function': 'error',
    }
  }
];
