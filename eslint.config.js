module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:react-hooks/recommended',
      'plugin:styled-components/recommended', // Ensure styled-components plugin is included
    ],
    plugins: ['react', 'jsx-a11y', 'react-hooks', 'styled-components'], // Ensure styled-components is listed as a plugin
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Add your own rules here
    },
  };
  