module.exports = {
  locales: ["en", "es"],
  input: "src/**/*.{js,jsx,ts,tsx}",
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  useKeysAsDefaultValue: true,
  defaultNamespace: "common",
  defaultValue: (locale, namespace, key, value) => (value ? value : key),
  lexers: {
    js: ["JavascriptLexer"],
    ts: ["JavascriptLexer"],
    jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],
    default: ["JavascriptLexer"],
  },
}
