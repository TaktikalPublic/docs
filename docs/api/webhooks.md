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

- `EventSignature` is used to validate that Taktikal is the one who sends the
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
Taktikal sents out webhook events for `SignedDocument`, `AllSigned`, `Canceled` or `Expired`, 

| Event name | Event description | contains document | integer value |
| ------- | ------- | ------- | ------- |
| `SignedDocument` | This is an event that is run for each signing except the last one. | :red_circle:  | 1 |
| `AllSigned` |  This is an event triggered on the last signature. | :white_check_mark:  | 2 |
| `Canceled` | This is an event that is run when a signing process is canceled. | :red_circle:  | 5 |
| `Expired` | each signing process needs to be signed within 30 days. If it expiers this event will be triggered | :white_check_mark:  | 6 |


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
        "Key": "si7abef56540bd49f9a9b8a33969a9cf8c",
        "Signed": true,
        "ProcessKey": "sp231f52f87d6f4caaa2e29ecac92d055b",
        "CommunicationDeliveryType": "Email"
      }
    ],
    "FlowKey": "722989cac3fx",
    "FlowName": "Umsókn um frí",
    "SignedDocument": "JVBERi0xLjQ...",
    "Attachments": [
      {
        "FileName": "mega document.pdf",
        "FileContent": "JVBERi0x..."
      }
    ],
    "AttachmentReferences": [
      {
        "Id": "at73bb",
        "FileName": "logo_4x.png",
        "ContentLength": 9376,
        "ContentType": "image/png",
        "Url": "https://app.taktikal.is/attachment/sp231f52f87d6f4caaa2e29ecac92d055b/at73bb/logo_4x.png",
        "Description": "Description goes here"
      }
    ],
    "EventType": 2, // "AllSigned",
    "Meta": {
      "PdfUrl": "https://fill.dropandsign.is/api/flow/665a62b4a97a/pdf",
      "PdfFieldData": "{\"Nafn\":\"Test User\",\"userInfo\":\"info\",\"ssn\":\"123456-7890\"}"
    }
  },
  "EventSignature": {
    "TimeStamp": 637030223561542290,
    "Guid": "2065b6c0-934f-4d18-81d3-46c29b913311",
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
        public string Guid { get; set; }
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
        /// Creates a signature for a given timestamp and guid using a apiKey
        /// </summary>
        public static string GetSignature(long timestamp, string guid, string apiKey)
        {
            apiKey = apiKey ?? "";
            var encoding = new UTF8Encoding();
            byte[] keyByte = encoding.GetBytes(apiKey);
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
