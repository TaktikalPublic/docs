---
title: "Include the Signing Page via Iframe"
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

Adding `?iframe=true` changes the behavior of the signing page to work better
inside of an Iframe. The footer and header will not be rendered and certain
spacing will be reduced.

| Without `?iframe=true`                     |  With `?iframe=true`                 |
| ------------------------------------------ | ------------------------------------ |
| ![Without `?iframe=true`][without_iframe]  | ![With `?iframe=true`][with_iframe]  |

[without_iframe]: /img/api/signing-page/without-iframe-true.png
[with_iframe]: /img/api/signing-page/with-iframe-true.png

## Iframe configuration options

### `skipGreeting`

When the user opens the link, the first screen he sees will be a greeting
screen. You can skip this step by adding `skipGreeting=true` to the query.

```html
?iframe=true&skipGreeting=true
```

This will make the first screen the user sees be the screen with the document to
sign. This is useful when including the iframe within a bigger process.

### `showEndScreen`

When the user has completed signing he will be moved from the Control Code
screen to an end screen.

If you want to skip showing the end screen and manage what happens after signing
yourself, you can add `showEndScreen=false` to the query.

```
?iframe=true&showEndScreen=false
```

If this option is provided the user will not be moved from the Control Code
screen by us, and it expects the parent page to remove the iframe in some way.
If this is not done the user will keep seeing the Control Code indefinitely.

### `hideSignDocumentHeaderText`

When using the iframe as part of a larger step-based flow, you may want to
provide your own title and text. Providing `hideSignDocumentHeaderText=true`
hides the text on the Sign Document screen.

| Without `hideSignDocumentHeaderText=true`                               |  With `hideSignDocumentHeaderText=true`                           |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------- |
| ![Without `hideSignDocumentHeaderText=true`][without_hide_header_text]  | ![With `hideSignDocumentHeaderText=true`][with_hide_header_text]  |

[without_hide_header_text]: /img/api/signing-page/without-hide-header-text.png
[with_hide_header_text]: /img/api/signing-page/with-hide-header-text.png

## Iframe events

The iframe will send events up to the parent via [postMessage][postmessage]. The
events can be used to know what's happening inside the iframe.

[postmessage]:
  https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

### Success events

|  Event type         |  Description                                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `signing_completed` | Sent when **EVERY** document has been signed. The last signed document is sent alongside this event.                              |
| `document_signed`   | Sent when **EACH** document is signed, INCLUDING the last document. This event does NOT mean that every document has been signed. |

In nearly all cases, you will only want to listen to the `signing_completed`
event. Using `document_signed` is discouraged.

The payloads for these events look like so:

```tsx
interface SignedDocument {
  content: string; // Base64
  digest: string;
  fileName: string;
}

interface SigningCompletedEventPayload {
  type: "signing_completed";
  processKey: string;
  signeeKey: string;
  /* 'signedDocument' is only sent for 'Qualified' signature type */
  signedDocument?: SignedDocument;
}

interface DocumentSignedEventPayload {
  type: "document_signed";
  processKey: string;
  signeeKey: string;
  signedDocument: SignedDocument;
}
```

#### Success event examples

Given a signing process with a single document, the following events are sent
during the happy path:

```jsonc
{ type: "document_signed", processKey: "sp0", signeeKey: "si0", signedDocument: { /* ... */ } }
{ type: "signing_completed", processKey: "sp0", signeeKey: "si0", signedDocument: { /* ... */ } }
```

For a sequence of three documents, the events will look like so:

```jsonc
{ type: "document_signed", processKey: "sp0", signeeKey: "si0", signedDocument: { /* ... */ } }
{ type: "document_signed", processKey: "sp1", signeeKey: "si1", signedDocument: { /* ... */ } }
{ type: "document_signed", processKey: "sp2", signeeKey: "si2", signedDocument: { /* ... */ } }
{ type: "signing_completed", processKey: "sp2", signeeKey: "si2", signedDocument: { /* ... */ } }
```

### Error events

Under certain conditions the user will not be able to sign the document. When
this happens an error event will be sent.

|  Event type         |  Description                                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `already_signed`    | The user has already signed every document.                                                                                              |
| `process_not_found` | No signing process was found for the keys provided in the URL.                                                                           |
| `process_expired`   | Process has already expired - In almost all cases this is 30 days after process has been created.                                        |
| `process_canceled`  | Process has been canceled or recalled by the process owner.                                                                              |
| `error`             | An unknown error occurred when loading the signing page - in most cases the events above are likely to occur before reaching this state. |

```tsx
interface AlreadySignedEventPayload {
  type: "already_signed";
  processKey: string;
  signeeKey: string;
}

interface ProcessNotFoundEventPayload {
  type: "process_not_found";
  processKey: string;
  signeeKey: string;
}

interface ProcessExpiredEventPayload {
  type: "process_expired";
  processKey: string;
  signeeKey: string;
}

interface ProcessCanceledEventPayload {
  type: "process_canceled";
  processKey: string;
  signeeKey: string;
}

interface ErrorEventPayload {
  type: "error";
  processKey?: string;
  signeeKey?: string;
}
```

## Language

Language support depends on the specific Signing Page (such as for Smart Forms),
but our standard Signing Page supports the following languages:

| Language         |  Country Code |
| ---------------- | ------------- |
| English          | en-us         |
| German           | de            |
| French           | fr            |
| Icelandic        | is            |
| Danish           | da            |
| Norwegian Bokmål | nb            |
| Swedish          | sv            |
| Czech            | cs            |
| Spanish          | es            |
| Polish           | pl            |
| Hungarian        | hu            |

You can set the language of the Signing Page iframe by adding
`lng={country_code}` to the query.

```
/s/:processKey/:signeeKey?iframe=true&lng=de
```

## FAQ

### What size should I give the Iframe?

For a full-screen layout where the Signing Page iframe is below a header, we
recommend giving it a width of `100vw` and height of
`calc(100vh - headerHeight)`.

For situtations where it's not possible to make the iframe full-screen, giving
it a fixed height works quite well.

- If `hideSignDocumentHeaderText=true`, we recommend giving the iframe a height
  of at least 700px.
- Otherwise, we recommend giving the iframe a height of at least 900px.

### There is a double scrollbar, can I get rid of it?

The iframe will show a scrollbar if it is not tall enough. When providing a
fixed size to the iframe

- If `hideSignDocumentHeaderText=true`, a scrollbar will not be shown if the
  height is greater than or equal to 700px.
- Otherwise, a scrollbar will not be shown if the height is greater than or
  equal to 900px.

For full-screen layouts, there is not a good way to get rid of a double
scrollbar.
