export default {
  processors: [
    [
      "@mapbox/stylelint-processor-arbitrary-tags",
      {
        fileFilterRegex: [/\.vue$/],
      },
    ],
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-vue",
    "stylelint-config-rational-order",
  ],
  plugins: ["stylelint-order", "stylelint-scss", "stylelint-config-rational-order/plugin"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "/^at-/",
          "/^mixin/",
          "/^extend/",
          "/^include/",
          "/^if/",
          "/^else/",
          "/^function/",
          "/^return/",
          "/^each/",
          "/^while/",
          "use",
        ],
      },
    ],
    "color-function-notation": "legacy",
    "no-invalid-position-at-import-rule": null,
    "function-no-unknown": null,
    "import-notation": "string",
    "media-query-no-invalid": null,
    "property-no-vendor-prefix": null,
    "order/order": [
      "custom-properties",
      {
        type: "at-rule",
        name: "include",
      },
      "declarations",
      {
        type: "at-rule",
        name: "media",
      },
      {
        type: "rule",
        selector: "^&:\\w+$",
      },
      {
        type: "rule",
        selector: "^&--[-a-z0-9]+",
      },
      {
        type: "rule",
        selector: "^\\.[-_a-zA-Z0-9]+",
      },
      {
        type: "rule",
        selector: "^&__[-a-z0-9]+",
      },
    ],
    "comment-word-disallowed-list": [
      [/((Х|х)+уй|(Х|х)уе|(Х|х)уё|(Б|б)ляд|(М|м)уда|(П|п)идо|(П|п)еди|(П|п)еде|(^|\s)+(Б|б)ля)/],
      {
        message: "Комментарий оскорбительный при себе оставь",
      },
    ],
  },
};
