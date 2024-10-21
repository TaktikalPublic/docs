---
title: "Environment Widget"
---

<head>
  <script
    type="text/javascript"
    src="https://app.taktikal.is/widget/init.js"
    onload="window.TaktikalWidget?.init(document.getElementById('taktikal-widget'))"
  ></script>
</head>

<iframe
  id="taktikal-widget"
  src="https://app.taktikal.is/widget/example"
  frameborder="0"
  width="100%"
></iframe>

## Add the Enviromental Statistics Widget to your Website

Here is the minimum amount of code needed for the Environmental Statistics
Widget to work.

```html
<script
  type="text/javascript"
  src="https://app.taktikal.is/widget/init.js"
></script>

<iframe
  id="taktikal-widget"
  src="https://app.taktikal.is/widget/:publicCompanyKey"
  frameborder="0"
  width="100%"
></iframe>

<script>
  TaktikalWidget.init(document.getElementById("taktikal-widget"));
</script>
```

## How the widget works

The first `script` creates the `TaktikalWidget` object. It should be placed
before the `iframe` in the DOM.

```html
<script
  type="text/javascript"
  src="https://app.taktikal.is/widget/init.js"
></script>
```

The `iframe` includes the statistics themselves and renders them at the width it
has available to it.

```html
<iframe
  id="taktikal-widget"
  src="https://app.taktikal.is/widget/:key"
  frameborder="0"
  width="100%"
></iframe>
```

But the height of the `iframe`'s content may be different depending on the
width. This means that we can't know the height of the `iframe` beforehand. To
combat this, the `iframe` sends events communicating its own height.

By calling `TaktikalWidget.init(iframeElement)` the `TaktikalWidget` listens to
those events and takes care of initializing and maintaining the `iframe`'s
height correctly.

```html
<script>
  TaktikalWidget.init(document.getElementById("taktikal-widget"));
</script>
```

The colors used in the `iframe` can be configured. We've added the company's
colors from our branding settings as `colorPrimary` and `colorOffWhite`, but
these colors can be changed to any valid hex color. If the company has not
configured their brand colors in our settings, the default Taktikal colors will
be used.

## Theming

You can change the colors of the widget by modifying the `colorPrimary` and
`colorOffWhite` query parameters.

The value should be a hex color without the `#` like `2823fb`.

## Breakpoint

By default the widget's mobile breakpoint is set to `768`. You can change this
by providing a `breakAt` query parameter. `breakAt` should be an integer.

## Localization

Our widget supports two languages, `is` (Icelandic) and `en-us` (English). The
language is determined by the `language` query parameter.

```html
<iframe src="https://app.taktikal.is/widget/:key?language=en-us"></iframe>
```

If no language or an invalid language is provided, the widget defaults to `is`.
