module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // roda Prettier como regra ESLint
    "prettier", // desabilita regras conflitantes
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // aqui suas overrides
  },
};
