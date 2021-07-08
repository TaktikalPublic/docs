---
title: 'Environment Widget'
---

# Note: This documentation is out of date

Please refer, and link to the documentation at the link below.

## [https://app.taktikal.is/docs/environmental-statistics-widget](https://app.taktikal.is/docs/environmental-statistics-widget)

If you are sending the documentation link to a specific company, you can add
it's public company key and its branding colors to the link like so:

```js
?publicCompanyKey={key}&colorPrimary={hex}&colorOffWhite={hex}
```

## To be able to add environment widget to a company website

Example of a working demo:
[https://app-dev.taktikal.is/widget/VWx4YnlaQWQvNnRXRzBCZmd3Z3Y2a2o2SHg4cmxNdU0yR1hPc08xRUh3MD0?theme=dark&start=2019-12-01&end=2019-12-07](https://app-dev.taktikal.is/widget/VWx4YnlaQWQvNnRXRzBCZmd3Z3Y2a2o2SHg4cmxNdU0yR1hPc08xRUh3MD0?theme=dark&start=2019-12-01&end=2019-12-07)

Add the following script to any page that should display the widget

```js
<script type="text/javascript" src="http://app.taktikal.is/widget/init.js"/>
<iframe
  id="taktikal-widget"
  src="http://app.taktikal.is/widget/:key"
  frameborder="0"
  width="100%"
></iframe>
<script>
  TaktikalWidget.init(document.getElementById("taktikal-widget"));
</script>
```

The `src` part needs to be modified for each company

The :key needs to be replaced by public company key. This is a mandatory
parameter.

Example:

<!-- prettier-ignore -->
```js
src='http://app.taktikal.is/widget/OUIxM2FkV2E0K2lZZ0g3NTA1anBkQm9SQjZHWUFTV1ZiRHhWMkxndzBKRT0';
```

Other optional parameters are **theme**, **start**, **end**

**theme** can have one of the three values: [light, dark, grey]

_If no theme is provided the Taktikal theme is used_

Example for a light theme :

<!-- prettier-ignore -->
```js
src='http://app.taktikal.is/widget/OUIxM2FkV2E0K2lZZ0g3NTA1anBkQm9SQjZHWUFTV1ZiRHhWMkxndzBKRT0&theme=light';
```

Dark theme visual example:

![Environment%20Widget%20268e5ffdcc0e41daac8b71c423d5f196/Screenshot_2020-01-06_at_15.39.07.png](/img/api/environment-widget/Screenshot_2020-01-06_at_15.39.07.png)

Light theme visual example:

![Environment%20Widget%20268e5ffdcc0e41daac8b71c423d5f196/Screenshot_2020-01-06_at_15.41.01.png](/img/api/environment-widget//Screenshot_2020-01-06_at_15.41.01.png)

Grey theme visual example

![Environment%20Widget%20268e5ffdcc0e41daac8b71c423d5f196/Screenshot_2020-01-06_at_15.42.14.png](/img/api/environment-widget/Screenshot_2020-01-06_at_15.42.14.png)

No theme is provided the taktikal theme is used. Visual example:

![Environment%20Widget%20268e5ffdcc0e41daac8b71c423d5f196/Screenshot_2020-01-06_at_15.45.46.png](/img/api/environment-widget/Screenshot_2020-01-06_at_15.45.46.png)

**start and end** are the date limiting on the statistics and are in the format
of "yyyy-MM-dd" (year-month-day). If no start and end date are provided then
limitations are not active an all data will be taken into account.

Example if someone only wants to display the month of October of 2019 in a dark
theme:

<!-- prettier-ignore -->
```js
src='http://app.taktikal.is/widget/OUIxM2FkV2E0K2lZZ0g3NTA1anBkQm9SQjZHWUFTV1ZiRHhWMkxndzBKRT0&theme=darkstart=2019-10-01&end=2019-10-31';
````
