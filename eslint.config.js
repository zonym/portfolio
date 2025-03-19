import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { ignores: ['build/', 'node_modules/', 'webpack.config.js'] },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended
];
