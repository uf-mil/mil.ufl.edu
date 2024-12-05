import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        BUILD_TIME: "readonly",
        COMMIT_HASH: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/no-unescaped-entities": 0,
      "react/no-unknown-property": [
        "error",
        {
          ignore: [
            "xmlnsDc",
            "xmlnsCc",
            "xmlnsRdf",
            "xmlnsSvg",
            "rdfAbout",
            "rdfResource",
          ],
        },
      ],
    },
  },
];
