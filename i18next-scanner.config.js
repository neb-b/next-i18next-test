module.exports = {
  input: ["src/**/*.tsx"],
  output: "./",
  options: {
    debug: true,
    removeUnusedKeys: true,
    func: {
      list: ["getTranslationId"],
      extensions: [".js", ".tsx"],
    },
    lngs: ["en", "es"],
    ns: ["translation"],
    defaultLng: "en",
    defaultNs: "translation",
    defaultValue: "",
    resource: {
      loadPath: "src/locales/{{lng}}/{{ns}}.json",
      savePath: "src/locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
  },
}
