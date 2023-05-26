module.exports = {
  portal: [
    "portal/introduction",
    {
      type: "category",
      label: "Settings",
      items: [
        "portal/settings",
        {
          type: "category",
          label: "Integrations",
          items: [
            "portal/integrations/introduction",
            "portal/integrations/50skills",
          ],
        },
      ],
    },
  ],
  "fill-and-sign": [
    "fill-and-sign/introduction",
    "fill-and-sign/creating-your-first-document",
    "fill-and-sign/setting-up-your-first-document",
    {
      type: "category",
      label: "Usage",
      items: [
        "fill-and-sign/usage/usage",
        "fill-and-sign/usage/website",
        "fill-and-sign/usage/link",
        "fill-and-sign/usage/single-page-application",
        "fill-and-sign/usage/language",
      ],
    },
    {
      type: "category",
      label: "Editor",
      items: [
        {
          type: "category",
          label: "Keyboard Shortcuts",
          items: [
            "fill-and-sign/editor/keyboard-shortcuts/symbol-table",
            "fill-and-sign/editor/keyboard-shortcuts/document-shortcuts",
            "fill-and-sign/editor/keyboard-shortcuts/field-list-shortcuts",
          ],
        },
        "fill-and-sign/editor/deactivate-a-flow",
        "fill-and-sign/editor/multiple-signees",
        "fill-and-sign/editor/draft-and-publish",
        "fill-and-sign/editor/document-delivery",
      ],
    },
  ],
  api: [
    "api/introduction",
    "api/using-the-auth-api",
    {
      type: "category",
      label: "Using the Signing API",
      items: [
        "api/using-the-signing-api/single-document",
        "api/using-the-signing-api/sequence-signing",
        "api/using-the-signing-api/test-signatures",
      ],
    },
    "api/webhooks",
    "api/email-templates",
    "api/activity-log",
    "api/environment-widget",
    "api/signing-page-iframe",
  ],
  "drop-and-sign": [
    "drop-and-sign/introduction",
    "drop-and-sign/senda-skjal-i-undirritun",
  ],
  "smart-forms": [
    "smart-forms/introduction",
    "smart-forms/customer-initiated",
    "smart-forms/examples",
  ],
};
