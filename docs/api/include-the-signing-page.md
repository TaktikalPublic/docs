---
title: 'Include the Signing Page via Iframe'
---

## Getting Started

A typical link to our signing page looks like so:

```
https://app.taktikal.is/s/:processKey/:signeeKey
```

When including it in an iframe, you should add `?iframe=true` to the URL.

```html
<iframe src="http://app.taktikal.is/s/:processKey/:signeeKey?iframe=true" />
```

This will remove the footer and logo and reduce to spacing above the content so
it fits better within your page.

## Configure the iframe

### Skip the greeting step

When the user opens the link, the first screen he sees will be a greeting
screen. You can skip this step by adding `skipGreeting=true` to the query.

```html
?iframe=true&skipGreeting=true
```

This will make the first screen the user sees be the screen with the Document to
sign. This is useful when including the iframe within a bigger process.

### Skip the end screen

When the user has completed signing he will be moved from the Control Code
screen to an end screen.

If you want to skip showing the end screen and manage what happens after signing
is complete yourself, you can add `showEndScreen=false` to the query.

```
?iframe=true&showEndScreen=false
```

If this option is provided the user will not be moved from the Control Code
screen by us, and it expects the parent page to remove the iframe in some way.
If this is not done the user will keep seeing the Control Code indefinitely.


## Iframe events

The iframe will send events upp to the parent. The events are:

```tsx
window.parent.postMessage(
  {
    type: 'document_signed',
    processKey, // string
    signeeKey, // string
  },
  '*'
);
```

```tsx
window.parent.postMessage(
  {
    type: 'signing_completed',
    processKey,
    signeeKey,
    signedDocument,
  },
  '*'
);
```


When the user has finished signing, the following will be sent up to the parent
window:

If this is a sequence with tree documents then the events returned will be `document_signed` for the first two documents and `signing_completed` for the last document.


When you receive this `signing_completed` event, you can safely remove the iframe.



### Error events

Under certain conditions (or if an error occurred) the user will not be able to
sign the document. These conditions include the document having already been
signed or the signing process not being found.

Here are all of the potential error events that can occur when the signing page
loads.

```tsx
window.parent.postMessage(
  {
    type: 'already_signed',
    processKey,
    signeeKey,
  },
  '*'
);
```

```tsx
window.parent.postMessage(
  {
    type: 'process_not_found',
    processKey,
    signeeKey,
  },
  '*'
);
```

```tsx
window.parent.postMessage(
  {
    type: 'invalid_keys',
    processKey,
    signeeKey, // Optional
  },
  '*'
);
```

```tsx
window.parent.postMessage(
  {
    type: 'error',
    processKey,
    signeeKey, // Optional
  },
  '*'
);
```
