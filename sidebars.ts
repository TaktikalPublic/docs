module.exports = {
  'fill-and-sign': [
    'fill-and-sign/introduction',
    'fill-and-sign/api',
    {
      type: 'category',
      label: 'Installation',
      items: [
        'fill-and-sign/installation/dynamic-website',
        'fill-and-sign/installation/static-website',
      ],
    },
    {
      type: 'category',
      label: 'Editor',
      items: [
        {
          type: 'category',
          label: 'Keyboard Shortcuts',
          items: [
            'fill-and-sign/editor/keyboard-shortcuts/symbol-table',
            'fill-and-sign/editor/keyboard-shortcuts/document-shortcuts',
            'fill-and-sign/editor/keyboard-shortcuts/field-list-shortcuts',
          ],
        },
        'fill-and-sign/editor/creating-your-first-fill-and-sign-document',
        'fill-and-sign/editor/deactivate-a-flow',
        'fill-and-sign/editor/multiple-signees',
        'fill-and-sign/editor/draft-and-publish',
        'fill-and-sign/editor/wip-document-delivery',
      ],
    },
  ],
  api: [
    'api/introduction',
    'api/using-the-auth-api',
    {
      type: 'category',
      label: 'Using the Signing API',
      items: [
        'api/using-the-signing-api/usage',
        'api/using-the-signing-api/text-signatures',
      ],
    },
    'api/webhooks',
    'api/paths',
    'api/activity-log',
    'api/environment-widget',
    'api/include-the-signing-page',
  ],
  'drop-and-sign': ['drop-and-sign/introduction'],
  'smart-forms': ['smart-forms/introduction'],
};