---
title: 'Webhooks'
---

After a document has been signed it can be delivered back to your system.

## Definition of terms

The following keys are needed to work with webhooks

- `companyKey` the baseKey used to identify a company.
- `flowKey` There can be many flows each with its own delivery methods
  registered.
- `apiKey` The key used to validate that Taktikal sends the webhook data.

## Webhook

The data Taktikal sends via webhook are wrapped in a `WebhookEventPayload`
object that has an `Id`, `EventData`, and `EventSignature` See example data
below.

- `EventSignature` is used to validate that Taktikal is the one how sends the
  data. `TimeStamp` and `GUID` hashed with the `apiKey` to create a `Signature`.
  If the `Signature` that is calculated is not a match to the value in the
  event, it was not sent by Taktikal.
- `EventData` contains all `signee` that signed the document and all their
  personal information provided in this process. The signed document is stored
  as a base64 string in the field `SignedDocument`

Taktikal will send a POST request to the registered URL when an event occurs and
expects an HTTP Status code 200 Response. For all other response codes, Taktikal
Will retry two more times. Unless an HTTP Status code 406 (not accepted) is
received that marks that we will not try again.

## Webhook event types

1. `SignedDocument` This is an event that is run for each signing except the
   last one
2. `AllSigned` This is an event triggered on the last sign on a process
3. `Auth` This is an event that is run when user authenticates with e-id
4. `Signup` Signup message event
5. `Canceled` This is an event that is run when a signing process is canceled
6. `Expired` Not all signees have signed within the time frame
7. `Reminder` a reminder to sign a document

## Register a webhook

Webhooks can be managed via the API. All routes can be viewed in Swagger
[here](https://onboarding.taktikal.is/api/swagger-ui/#/webhook).

## Code examples

### Example webhook event

```json
{
  "Id": "3e9922f5fd7f4a9baa75a3fa90cb9caf",
  "EventData": {
    "Signees": [
      {
        "Name": "Test User",
        "Ssn": "1234567890",
        "PhoneNumber": "1234567",
        "Email": "testUser@taktikal.is",
        "Address": "Address 5",
        "City": "Reykjavík",
        "Key": "si67067e3aaa2c",
        "Signed": true,
        "ProcessKey": "spae707",
        "CommunicationDeliveryType": "Email"
      }
    ],
    "FlowKey": "722989cac3fx",
    "FlowName": "Umsókn um frí",
    "SignedDocument": "JVBERi0xLjQ...",
    "Attachments": [
      {
        "FileName": "auka_skjal.pdf",
        "FileContent": "JVBE..."
      },
      {
        "FileName": "auka_skjal_2.pdf",
        "FileContent": "JVBER..."
      },
      {
        "FileName": "mega skjal.pdf",
        "FileContent": "JVBERi0x..."
      }
    ],
    "AttachmentReferences": [
      {
        "Id": "at73bb",
        "FileName": "logo_4x.png",
        "ContentLength": 9376,
        "ContentType": "image/png",
        "Url": "https://app.taktikal.is/attachment/sp30524e1d5d9b/at73bb/logo_4x.png",
        "Description": "Description goes here"
      },
      {
        "Id": "at8d9b",
        "FileName": "large_file.zip",
        "ContentLength": 6923449,
        "ContentType": "application/zip",
        "Url": "https://app.taktikal.is/attachment/sp30524e1d5d9b/at8d9b/large_file.zip",
        "Description": "Description goes here"
      }
    ],
    "EventType": 2, // "AllSigned",
    "Meta": {
      "PdfUrl": "https://fill.dropandsign.is/api/flow/665a62b4a97a/pdf",
      "PdfFieldData": "{\"Nafn\":\"Test User\",\"notendaheiti\":\"info\",\"Kennitala\":\"123456-7890\"}"
    }
  },
  "EventSignature": {
    "TimeStamp": 637030223561542290,
    "Guid": "3e9922f5fd7f4a9baa75a3fa90cb9caf",
    "Signature": "5qN29xaZHKZ65PLMB6ajRgpcxUU9dFRAXhkw36C2d38="
  }
}
```

### C# example

Data transfer objects to accept webhooks from Taktikal and a validation
function.

```csharp
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace Webhook
{
    public class WebhookEventPayload
    {
        public Guid Id { get; set; }
        public SignedDocumentEventData EventData { get; set; }
        public EventSignature EventSignature { get; set; }
    }

    /// <summary>
    /// The signature section that will be in all webhook payloads. Used to validate the payload
    /// </summary>
    public class EventSignature
    {
        public long TimeStamp { get; set; }
        public Guid Guid { get; set; }
        public string Signature { get; set; }
    }

    public class SignedDocumentEventData
    {
        public List<Signee> Signees { get; set; }
        public string SignedDocument { get; set; }
        public List<SigningAttachment> Attachments { get; set; }
        public EventType EventType { get; set; }
        public Dictionary<string, string> Meta { get; set; }
    }

    public class SigningAttachment
    {
        public string FileName { get; set; }

        /// <summary>
        /// FileContent is stored as base64 string
        /// </summary>
        public string FileContent { get; set; }
    }

    public enum EventType
    {
        AllSigned
    }

    public class Signee
    {
        public string Name { get; set; }
        public string Ssn { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Key { get; set; }
        public bool Signed { get; set; }
        public string ProcessKey { get; set; }
        public string CommunicationDeliveryType { get; set; }
    }

    public static class WebhookHelpers
    {
        /// <summary>
        /// Creates a signature for a given timestamp and guid using a secret
        /// </summary>
        public static string GetSignature(long timestamp, Guid guid, string secret)
        {
            secret = secret ?? "";
            var encoding = new UTF8Encoding();
            byte[] keyByte = encoding.GetBytes(secret);
            byte[] messageBytes = encoding.GetBytes($"{timestamp}{guid}");
            using (var hmacsha256 = new HMACSHA256(keyByte))
            {
                byte[] hashmessage = hmacsha256.ComputeHash(messageBytes);
                return Convert.ToBase64String(hashmessage);
            }
        }
    }
}
```

### JavaScript example (TypeScript)

```jsx
// types
export interface Payload {
  Id: string;
  EventData: {
    Signees: Signee[];
    FlowKey: string;
    FlowName: string;
    SignedDocument: string;
    Attachments: any[];
    EventType: number;
    Meta: {
      pdfFieldData: string;
    };
  };
  EventSignature: {
    TimeStamp: number;
    Guid: string;
    Signature: string;
  };
}

export interface Signee {
  Name: string;
  Ssn: string;
  PhoneNumber: string;
  Email: string;
  Address: null;
  PostalCode: null;
  City: null;
  Key: string;
  Signed: boolean;
  ProcessKey: string;
  CommunicationDeliveryType: number;
}

// request handler
export const webhook: Handler = async (req, res) => {
  try {
    const { EventData } = req.body as Payload;
    // save the data
    res.status(200).json({ message: "OK" });
    return;
  } catch (e) {
    res.status(400).json({ message: "error" });
    return;
  }
};
```
