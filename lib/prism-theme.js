// @ts-check

/** @type {import("prism-react-renderer").PrismTheme} */
module.exports = {
  plain: {
    color: "var(--ifm-color-gray-200)",
    backgroundColor: "var(--ifm-color-gray-800)",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#5C6370",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#abb2bf",
      },
    },
    {
      types: ["selector", "tag"],
      style: {
        color: "#e06c75",
      },
    },
    {
      types: [
        "property",
        "boolean",
        "number",
        "constant",
        "symbol",
        "attr-name",
        "deleted",
      ],
      style: {
        color: "#d19a66",
      },
    },
    {
      types: ["string", "char", "attr-value", "builtin", "inserted"],
      style: {
        color: "#98c379",
      },
    },
    {
      types: ["operator", "entity", "url"],
      style: {
        color: "#56b6c2",
      },
    },
    {
      types: ["string"],
      languages: ["css"],
      style: {
        color: "#56b6c2",
      },
    },
    {
      types: ["atrule", "keyword"],
      style: {
        color: "#c678dd",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#61afef",
      },
    },
    {
      types: ["regex", "important", "variable"],
      style: {
        color: "#c678dd",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["entity"],
      style: {
        cursor: "help",
      },
    },
  ],
};
