---
title: "Activity Log"
---

## Check the status of a document

Taktikals API returns a `ProcessKey` when a signing process is created. This key
can be used to check the status of the process. (see `ActivityLog` bellow).

When all `signees` have signed, a web-hook request is sent containing the signed
document.

[Webhooks ](/docs/api/webhooks)

## How to check the status of the document?

There are two ways to get the `ActivityLog`

- `GET` `/signing/activity/{ProcessKey}` for a single item
- `GET` `/signing/activity/user/` to get all activity for a given user (user is
  the one that starts the process)

Both endpoints support from and to dates to narrow down the search.

Example activity log for a `SigningProcess` with one `signee` that has signed.

```jsx
[
  {
    processKey: "spa2f3e",
    activityLog: [
      {
        flowKey: "3fc7848d338a",
        processKey: "spa2f3e",
        status: "Created",
        description: "Signing process created. ProcessKey: spa2f3e.",
        fileName: "demo_skjal-drop-and-sign-small.pdf",
        createdAt: "2019-11-08T11:03:49.0700000Z",
        createdBy: "test@taktikal.is",
      },
      {
        flowKey: "3fc7848d338a",
        processKey: "spa2f3e",
        signeeKey: "si4265c7a3263e",
        status: "SigneeAdded",
        description:
          "Signee added. Processkey: spa2f3e. Signee key: si4265c7a3263e.",
        createdAt: "2019-11-08T11:03:49.1200000Z",
        createdBy: "Taktikal.Core",
      },
      {
        flowKey: "3fc7848d338a",
        processKey: "spa2f3e",
        signeeKey: "si4265c7a3263e",
        status: "SignupSent",
        description:
          "Signup sent. Processkey: spa2f3e. Signee: si4265c7a3263e. Delivery method : Sms ",
        createdAt: "2019-11-08T11:03:49.4070000Z",
        createdBy: "Taktikal.Core",
      },
      {
        flowKey: "3fc7848d338a",
        processKey: "spa2f3e",
        status: "Started",
        description: "Signing process started. ProcessKey: spa2f3e.",
        fileName: "demo_skjal-drop-and-sign-small.pdf",
        createdAt: "2019-11-08T11:03:49.4230000Z",
        createdBy: "test@taktikal.is",
      },
      {
        flowKey: "3fc7848d338a",
        processKey: "spa2f3e",
        signeeKey: "si4265c7a3263e",
        status: "SMS:DELIVERED",
        description: "SMS delviery status: DELIVERED.",
        createdAt: "2019-11-08T11:04:04.7030000Z",
        createdBy: "Taktikal.Core",
      },
      {
        flowKey: "3fc7848d338a",
        processKey: "spa2f3e",
        signeeKey: "si4265c7a3263e",
        status: "SigneeSigned",
        description:
          "Signee signed. ProcessKey: spa2f3e. Signee key: si4265c7a3263e",
        createdAt: "2019-11-08T11:06:01.5600000Z",
        createdBy: "Taktikal.Core",
      },
      {
        flowKey: "3fc7848d338a",
        processKey: "spa2f3e",
        signeeKey: "si4265c7a3263e",
        status: "Completed",
        description: "Signing completed. ProcessKey: spa2f3e.",
        createdAt: "2019-11-08T11:06:01.6070000Z",
        createdBy: "Taktikal.Core",
      },
      {
        flowKey: "3fc7848d338a",
        processKey: "spa2f3e",
        signeeKey: "si4265c7a3263e",
        status: "Confirmation:delivered",
        description:
          "Mailgun webhook. Event: delivered. To:testUser@taktikal.is. Sender:postmaster@mailgun.taktikal.is. Id:2NwQ3QahRtWZgK37JQ-I8Q. Severity: . Reason:",
        createdAt: "2019-11-08T11:06:04.9930000Z",
        createdBy: "Mailgun",
      },
      {
        flowKey: "3fc7848d338a",
        processKey: "spa2f3e",
        signeeKey: "si4265c7a3263e",
        status: "SalesPerson:delivered",
        description:
          "Mailgun webhook. Event: delivered. To:testUser@taktikal.is. Sender:postmaster@mailgun.taktikal.is. Id:0QEQpeM1SKuVgWZaIG0tfQ. Severity: . Reason:",
        createdAt: "2019-11-08T11:06:05.7500000Z",
        createdBy: "Mailgun",
      },
    ],
    signees: [
      {
        processKey: "spa2f3e",
        signeeKey: "si4265c7a3263e",
        ssn: "123456-7890",
        name: "Signee Number One",
        address: "Address 5",
        postalCode: "555",
        city: "Reykjavík",
        phone: "1234567",
        email: "signeeOne@taktikal.is",
        createdAt: "2019-11-08T11:03:49.1000000Z",
        createdBy: "Taktikal.Core",
        updatedAt: "2019-11-08T11:03:49.1000000Z",
      },
    ],
  },
];
```
