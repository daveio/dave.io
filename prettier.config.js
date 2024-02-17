module.exports = {
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-css-order',
    'prettier-plugin-import-sort',
    'prettier-plugin-jsdoc',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-organize-imports',
    'prettier-plugin-style-order',
    'prettier-plugin-sort-imports',
  ],
  tailwindConfig: './tailwind.config.js',
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
}
