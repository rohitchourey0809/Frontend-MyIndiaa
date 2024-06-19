// .eslintrc.mjs
export const eslintConfig = {
  env: {
    browser: true,
    es2021: true,
    serviceworker: true,
  },
  globals: {
    self: "readonly", // Allow 'self' as a read-only global variable
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-restricted-globals": ["error", "event", "fdescribe"], // Ensure 'self' is not restricted
  },
};
