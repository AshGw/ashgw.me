import baseConfig from "@ashgw/eslint-config/config";
import "@ashgw/eslint-config/patch"

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
];