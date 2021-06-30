---
title: Add to a Static Website
slug: /
---

For each document you want to include, add a button element with the
`data-filekey` attribute.

```html
<button data-filekey="{{fileKey}}" class="btn">Fylla út skjal</button>
```

You should then add `/utils.js` to pages where the user should be able to open
Fill & Sign documents.

This script will do the following:

1. Include the CSS for the modal that document are opened in.
2. Add click listeners to each element with a `data-filekey` attribute with a
   valid file key.
3. Open the document when the elements are clicked.

The script should be included after elements with the `data-filekey` attribute.

```html
<body>
  <button data-filekey="{{fileKey}}">Open</button>

  <script src="https://fill.dropandsign.is/utils.js"></script>
</body>
```

## Fill & Sign Smart Forms

If the Fill & Sign document has an associated Smart Form, you can add
`data-has-smartform` to the same element and the Smart Form will be opened
instead of the Fill & Sign document.

```html
<button data-filekey="{{fileKey}}" data-has-smartform>Open</button>
```

## Initial data

It can be desirable to provide the initial data for some fields in a Fill & Sign
documents. This initial data can be provided by adding `data-initialdata` to the
element.

```html
<button data-filekey="{{fileKey}}" data-initialdata='{"name":"John Smith"}'>
  Open
</button>
```

You can see how the initial data should be provided to fields in the
[`initialData`](#initialData) section.

# Add Fill & Sign to a Dynamic Website (Single-Page Application)

## Installation

The Fill & Sign utilities live in our `@taktikal/fillandsign` package. You can
install it via npm.

```
npm i -S @taktikal/fillandsign
```

## Getting started

For documents to be opened in a modal you must include the modal CSS.

If your build process supports CSS imports, you can include it like so:

```tsx
import '@taktikal/fillandsign/styles.css';
```

If not, you can find the `styles.css` files in your `node_modules` folder under
`~/node_modules/@taktikal/fillandsign/styles.css`. You can then include the CSS
file in your project in any way you see fit.

If the CSS is not included, Fill & Sign will default to opening documents in a
new tab.

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

Radios are comprised of multiple radio options where one or none of them is
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
