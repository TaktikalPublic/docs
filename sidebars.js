module.exports = {
  docs: [
    {
      type: "category",
      label: "API",
      items: ["create-a-document"],
    },
    {
      type: "category",
      label: "Drop & Sign",
      items: ["create-a-document"],
    },
    {
      type: "category",
      label: "Fill & Sign",
      items: [
        "add-fill-and-sign",
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
            "fill-and-sign/editor/creating-your-first-fill-and-sign-document",
            "fill-and-sign/editor/deactivate-a-flow",
            "fill-and-sign/editor/multiple-signees",
            "fill-and-sign/editor/draft-and-publish",
            "fill-and-sign/editor/wip-document-delivery",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Portal",
      items: ["create-a-document"],
    },
  ],
};