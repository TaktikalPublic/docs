---
title: Add to a dynamic website
---

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
