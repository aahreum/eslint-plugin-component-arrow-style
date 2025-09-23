import { defineConfig } from "eslint/config";
import componentArrowStyle from "eslint-plugin-component-arrow-style";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    extends: [componentArrowStyle.configs.recommended],
  },
]);
