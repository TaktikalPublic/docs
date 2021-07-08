---
title: API
---

## Exports

### `openDocument()`

Opens a Fill & Sign document in a modal. If the user is on mobile, the document
is opened in a new tab.

```ts
export function openDocument(
  fileKey: string,
  options?: OpenDocumentInModalOptions
): void;
```

### `openDocumentInNewTab()`

Opens a Fill & Sign document in a new tab.

```ts
export function openDocumentInNewTab(
  fileKey: string,
  options?: OpenDocumentOptions
): void;
```

## Options

There are two ways to open a Fill & Sign document:

1.  In a new tab
2.  In a modal

Here are the configuration options for both:

```ts
export interface OpenDocumentOptions {
  smartForm?: boolean;
  initialData?: Record<string, string>;
}

export interface OpenDocumentInModalOptions extends OpenDocumentOptions {
  elementToReceiveFocusOnClose?: HTMLElement | EventTarget;
}
```

### `smartForm`

If a Fill & Sign document has an associated Smart Form, you can set the
`smartForm` option to `true` and the Smart Form will be opened instead of the
Fill & Sign document.

### `elementToReceiveFocusOnClose`

If a Fill & Sign document is opened in a modal, the element provided via the
`elementToReceiveFocusOnClose` would receive focus when the modal is closed.

### `initialData`

It can be desirable to provide the initial data for some fields in a Fill & Sign
documents. This initial data is provided in the form of an object.

Each field type receives its initial data slightly differently.

#### Textfield

Textfields are the simplest, they receive the string value to initialize them
with.

```ts
openDocument('{{fileKey}}', {
  initialData: {
    name: 'John Smith',
  },
});
```

In the example above, the textfield with the ID `name` would be initialized with
the value `"John Smith"`.

#### Checkbox

Checkboxes are checked if the string value they receive is `"checked"` (case
sensitive).

```ts
openDocument('{{fileKey}}', {
  initialData: {
    check_1: 'checked',
    check_2: '',
    check_3: undefined,
    check_4: 'Checked',
  },
});
```

In the example above, the checkbox with the ID `check_1` would be checked. The
checkboxes with IDs `check_2`, `check_3`, `check_4` would not be checked.

#### Radios

Radios are composed of multiple radio options where one or none of them are
selected. Given a radio with IDs that look like so:

```
radio
  - option_a
  - option_b
  - option_c
```

You would make `option_b` selected like so:

```ts
openDocument('{{fileKey}}', {
  initialData: {
    radio: 'option_b',
  },
});
```
