---
title: "Customer Initiated"
---

## What are those?

Customer initiated Smart Forms are forms that can be embedded into a website via
`iframe`.

See
[iframe FAQ](http://localhost:3000/docs/api/signing-page-iframe#what-size-should-i-give-the-iframe/docs/api/signing-page-iframe#what-size-should-i-give-the-iframe)

Example:

```tsx
<iframe src="http://app.taktikal.is/f/:flowKey" />
```

### Optional parameters

These forms support optional parameters to skip the login step:

- `phone`
- `ssn`
- `email`

Example:

```tsx
<iframe src="http://app.taktikal.is/f/:flowKey?email=dev@taktikal.is&phone=2222222&ssn=6000101990" />
```

:::note

All 3 of the above mentioned parameters are required - Login page will be
displayed if one of them are missing

:::
