import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import unusedImports from "eslint-plugin-unused-imports";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { includeIgnoreFile } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default defineConfig([includeIgnoreFile(gitignorePath), {
  extends: compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),

  plugins: {
    "@typescript-eslint": typescriptEslint,
    "unused-imports": unusedImports,
  },

  languageOptions: {
    parser: tsParser,
  },

  rules: {
    "unused-imports/no-unused-imports": "error",

    "@typescript-eslint/no-unused-vars": ["error", {
      argsIgnorePattern: "^_",
    }],
  },
}]);