module.exports = {
  locales: ["en", "es"],
  //   namespaceSeparator: false,
  //   keySeparator: false,
  useKeysAsDefaultValue: true,
  defaultNamespace: "common",
  //   defaultValue: (locale, namespace, defaultValue) => {
  //     return defaultValue
  //   },
  defaultValue: (locale, namespace, key, value) => (value ? value : key),
  //   verbose: true,
  input: "src/**/*.{js,jsx,ts,tsx}",
  output: "public/locales/$LOCALE/$NAMESPACE.json",

  lexers: {
    js: ["JavascriptLexer"], // if you're writing jsx inside .js files, change this to JsxLexer
    ts: ["JavascriptLexer"],
    jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],

    default: ["JavascriptLexer"],
    resetDefaultValueLocale: true,
  },
  //   sort: true,
}
