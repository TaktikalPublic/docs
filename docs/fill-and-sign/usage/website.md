---
title: Add to a Website
---

For each document you want to include, add a button element with the
`data-filekey` attribute.

```html
<button data-filekey="{{fileKey}}" class="btn">Fylla út skjal</button>
```

You should then add our `utils.js` script to pages where the user should be able
to open Fill & Sign documents.

```html
<script src="https://fill.taktikal.is/utils.js"></script>
```

This script will do the following:

1. Include the CSS for the modal that document are opened in.
2. Add click listeners to each element with a `data-filekey` attribute with a
   valid file key.
3. Open the document when the elements are clicked.

The script should be included after elements with the `data-filekey` attribute.

```html
<body>
  <button data-filekey="{{fileKey}}">Open</button>

  <script src="https://fill.taktikal.is/utils.js"></script>
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

## Language

Add `data-language` to the button to set the language.

```html
<button data-filekey="{{fileKey}}" data-language="en-us">Open</button>
```

The supported languages are `is` and `en-us`.

If `data-language` is not present, the language will be set to Icelandic.
