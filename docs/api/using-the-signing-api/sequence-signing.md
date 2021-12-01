---
title: 'Sequence signing'
---

Sequence signing is a group of signingProcesses. By using a sequence to group
them to gether we can create flexible workflows. The most common work flow is a
sequence with `n` many signeers and `n` many documents. By grouping them in a
sequence we can have a link that links to many documents, the customer only gets
one email requesting him to sign all the documents. When all signeers have
signed all documents Taktikal will send all the documents in a single email.

A sequence is an array of signingProcesses and additional properties

| Property       | Data type | Description                                                                                                |
| -------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| `User`         | string    | email address of owner of this sequence                                                                    |
| `RequiresAuth` | bool      | if set to true a signee needs to authenticate to be able to view the documents before signing              |
| `SignInOrder`  | true      | if set to true the first signee in the sequence needs to sign all documents before signee nr 2 is notified |

### Example request

```json

POST /api/management/signing/sequence HTTP/1.1
Host: onboardingdev.taktikal.is
Content-Type: application/json
Accept: application/json
Authorization: Basic MTNhNGU3YjdlNzI0OmFwaS0zZmY0MDkxZDFkOWU0NzQwYmJiMTNkMWI2MmZi


{
  "user": "your@email.is",
  "SignInOrder": false,
  "RequiresAuth": false,
  "CreateSigningProcesses": [
    {
      "pdfDocument": "Base 64 string of PDF document",
      "pdfFileName": "example.pdf",
      "flowKey": "fd9583b6be91",
      "meta": {
        "myKey": "myvalue"
      },
      "user": "your@email.is",
      "SignInOrder": false,
      "RequiresAuth": false,
      "SignatureLocation": "TopFirstPage",
      "createSignees": [
        {
          "name": "Dagný prófari Bjarkadóttir",
          "ssn": "6000101992",
          "address": "Götugata 23",
          "postalCode": "108",
          "city": "Reykjavík",
          "email": "noreply@taktikal.is",
          "phoneNumber": "4444444",
          "communicationDeliveryType": "none",
          "hidePersonalCode": false
        },
        {
          "name": "Maðkur þór Jónsson",
          "ssn": "6000101997",
          "address": "Götugata 28",
          "postalCode": "108",
          "city": "Reykjavík",
          "email": "noreply@taktikal.is",
          "phoneNumber": "9999999",
          "communicationDeliveryType": "none",
          "hidePersonalCode": false
        }
      ]
    },
    {
      "pdfDocument": "Base 64 string of PDF document",
      "pdfFileName": "example.pdf",
      "flowKey": "fd9583b6be91",
      "meta": {
        "myKey": "myvalue"
      },
      "user": "your@email.is",
      "SignInOrder": false,
      "RequiresAuth": false,
      "SignatureLocation": "TopFirstPage",
      "createSignees": [
        {
          "name": "Dagný prófari Bjarkadóttir",
          "ssn": "6000101992",
          "address": "Götugata 23",
          "postalCode": "108",
          "city": "Reykjavík",
          "email": "noreply@taktikal.is",
          "phoneNumber": "4444444",
          "communicationDeliveryType": "none",
          "hidePersonalCode": false
        },
        {
          "name": "Maðkur þór Jónsson",
          "ssn": "6000101997",
          "address": "Götugata 28",
          "postalCode": "108",
          "city": "Reykjavík",
          "email": "noreply@taktikal.is",
          "phoneNumber": "9999999",
          "communicationDeliveryType": "none",
          "hidePersonalCode": false
        }
      ]
    }
  ]
}

```

### Example response

```json
{
  "key": "pga9c4b4a7d8a84e5792",
  "status": "Created",
  "requiresAuth": false,
  "user": "your@email.is",
  "signInOrder": false,
  "signees": [
    {
      "key": "gs3767046139",
      "url": "https://app-dev.taktikal.is/s/pga9c4b4a7d8a84e5792/gs3767046139",
      "signingKeys": [
        {
          "signeeKey": "sidd2fb2fd3ad4",
          "processKey": "spfc1f49bff785"
        },
        {
          "signeeKey": "si8664b3497230",
          "processKey": "sp9945c40a326e"
        }
      ]
    },
    {
      "key": "gsec71b583bf",
      "url": "https://app-dev.taktikal.is/s/pga9c4b4a7d8a84e5792/gsec71b583bf",
      "signingKeys": [
        {
          "signeeKey": "sie47410ddd141",
          "processKey": "spfc1f49bff785"
        },
        {
          "signeeKey": "si0c21b8408d3b",
          "processKey": "sp9945c40a326e"
        }
      ]
    }
  ],
  "signingProcesses": [
    {
      "key": "spfc1f49bff785",
      "signees": [
        {
          "name": "Dagný prófari Bjarkadóttir",
          "ssn": "6000101992",
          "phoneNumber": "4444444",
          "email": "noreply@taktikal.is",
          "address": "Götugata 23",
          "postalCode": "108",
          "city": "Reykjavík",
          "key": "sidd2fb2fd3ad4",
          "signed": false,
          "processKey": "spfc1f49bff785",
          "hidePersonalCode": false,
          "communicationDeliveryType": "None",
          "url": "https://app-dev.taktikal.is/s/spfc1f49bff785/sidd2fb2fd3ad4",
          "signatureType": "Qualified"
        },
        {
          "name": "Maðkur þór Jónsson",
          "ssn": "6000101997",
          "phoneNumber": "9999999",
          "email": "noreply@taktikal.is",
          "address": "Götugata 28",
          "postalCode": "108",
          "city": "Reykjavík",
          "key": "sie47410ddd141",
          "signed": false,
          "processKey": "spfc1f49bff785",
          "hidePersonalCode": false,
          "communicationDeliveryType": "None",
          "url": "https://app-dev.taktikal.is/s/spfc1f49bff785/sie47410ddd141",
          "signatureType": "Qualified"
        }
      ],
      "flowKey": "fd9583b6be91",
      "status": "Created",
      "meta": {
        "myKey": "myvalue"
      },
      "pdfFileName": "example.pdf",
      "attachments": [],
      "attachmentReferences": [],
      "requiresAuth": false,
      "user": "your@email.is",
      "signInOrder": false,
      "signatureLocation": "TopFirstPage",
      "sequenceKey": "pga9c4b4a7d8a84e5792"
    },
    {
      "key": "sp9945c40a326e",
      "signees": [
        {
          "name": "Dagný prófari Bjarkadóttir",
          "ssn": "6000101992",
          "phoneNumber": "4444444",
          "email": "noreply@taktikal.is",
          "address": "Götugata 23",
          "postalCode": "108",
          "city": "Reykjavík",
          "key": "si8664b3497230",
          "signed": false,
          "processKey": "sp9945c40a326e",
          "hidePersonalCode": false,
          "communicationDeliveryType": "None",
          "url": "https://app-dev.taktikal.is/s/sp9945c40a326e/si8664b3497230",
          "signatureType": "Qualified"
        },
        {
          "name": "Maðkur þór Jónsson",
          "ssn": "6000101997",
          "phoneNumber": "9999999",
          "email": "noreply@taktikal.is",
          "address": "Götugata 28",
          "postalCode": "108",
          "city": "Reykjavík",
          "key": "si0c21b8408d3b",
          "signed": false,
          "processKey": "sp9945c40a326e",
          "hidePersonalCode": false,
          "communicationDeliveryType": "None",
          "url": "https://app-dev.taktikal.is/s/sp9945c40a326e/si0c21b8408d3b",
          "signatureType": "Qualified"
        }
      ],
      "flowKey": "fd9583b6be91",
      "status": "Created",
      "meta": {
        "myKey": "myvalue"
      },
      "pdfFileName": "example.pdf",
      "attachments": [],
      "attachmentReferences": [],
      "requiresAuth": false,
      "user": "your@email.is",
      "signInOrder": false,
      "signatureLocation": "TopFirstPage",
      "sequenceKey": "pga9c4b4a7d8a84e5792"
    }
  ]
}
```
