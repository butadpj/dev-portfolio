module.exports = {
  overrides: [
    {
      files: ["*.astro"],
      extends: ["plugin:astro/recommended"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "astro/no-set-html-directive": "error",
      },
    },
    {
      files: ["*.tsx"],
      extends: ["eslint:recommended", "plugin:solid/typescript"],
      plugins: ["solid"],
      parser: "@typescript-eslint/parser", // if not already added
      rules: {
        "no-unused-vars": 1,
        "solid/self-closing-comp": 0,
      },
    },
  ],
};
