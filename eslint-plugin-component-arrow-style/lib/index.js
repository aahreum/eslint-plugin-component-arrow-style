import componentAwareArrowBody from "./rules/component-aware-arrow-body.js";

export const rules = {
  "component-aware-arrow-body": componentAwareArrowBody,
};

export const configs = {
  recommended: {
    plugins: {
      "component-arrow-style": {
        rules,
      },
    },
    rules: {
      "component-arrow-style/component-aware-arrow-body": "error",
      "arrow-body-style": "off",
    },
  },
};

export default {
  rules,
  configs,
};
