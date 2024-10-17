# Eslint Configs

As of 09/24 the active eslint issue with monorepos (https://github.com/eslint/eslint/issues/3458) still presists. The solution is to import the patch file whenever eslint is used.

```
require("@ashgw/eslint-config/patch")
```
