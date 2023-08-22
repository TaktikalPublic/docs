---
title: Share via Link
---

All Fill & Sign Documents have a unique Public URL that they can be accessed at.
These URLs look like so:

```
https://fill.taktikal.is/s/:flowKey
```

This link can be sent via Email or Direct Message. It can also be added to a
website or a post on social media.

## Setting language

If you would like to have the UI in English you can add the query parameter
`?lng=en-us`, resulting in:

```
https://fill.taktikal.is/s/:flowKey?lng=en-us
```

## Initial data

It can be desirable to provide the initial data for some fields in a Fill & Sign
documents. This initial data can be provided by adding a query parameter called
`initialData` to the url. The value has to be Base64UrlEncoded

```js
const escape = (str: string) =>
  str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");

const percentToByte = (p: string) =>
  String.fromCharCode(parseInt(p.slice(1), 16));

export const base64urlEncode = (str: string) =>
  escape(btoa(encodeURIComponent(str).replace(/%[0-9A-F]{2}/g, percentToByte)));
```

Then it can be subsequently used like this (given that you have a field called
`address` in the form)

```js
const fieldsToInitialize = base64urlEncode('{"address":"Test street 11"}');
```

Resulting in

```html
https://fill.taktikal.is/s/:flowKey?initialData=:fieldsToInitialize
```
