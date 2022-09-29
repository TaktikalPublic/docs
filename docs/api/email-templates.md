---
title: 'Email Templates'
---

Allows customization of email templates

## Definition of terms

The following keys are needed to work with email templates

- `flowKey` There can be many flows each with its own email templates

## Email template types
The following email template types are available `Signup`, `Notification`, `Confirmation` or `SalesPerson`, 

| Template type | Description | Address to use in `To` field |
| ------- | ------- | ------- |
| `Signup` | Email sent to the customer requesting his signature | {{customer.email}} |
| `Notification` |  Email sent to the company | someemail@yourcompany.com |
| `Confirmation` | Email sent to the customer once signing has completed | {{customer.email}} |
| `SalesPerson` | Email sent, once signing has completed, to your company user that sent the signature request to the customer | {{salesPerson}} |


## Register an email template

Email templates can be managed via the API. All routes can be viewed in Swagger
[here](https://onboarding.taktikal.is/api/swagger-ui/#/email%20template).

## Handler template

### Example email template

```json
{
"flowKey": "722989cac3fx",
"to": "{{customer.email}}",
"Bcc": "",
"subject": "Electronic signature request from {{companyName}}",
"message": "<p>{{companyName}} asks you to sign {{customer.Meta.pdfFileName}}</p>",
"includeFiles": false,
"templateType": "Signup",
"language": "En"
}
```

## Handler template values

The following values are available for use in the message

| Handle | Description |
| ------- | ------- |
| {{customer.address}} | The customers address * |
| {{customer.city}} | The customers city * |
| {{customer.email}} | The customers email * |
| {{customer.name}} | The customers name * |
| {{customer.phoneNumber}} | The customers phone number * |
| {{customer.postalCode}} | The customers postal code * |
| {{customer.ssn}} | The customers social security number * |
| {{customer.Meta.pdfFileName}} | The name of the file to be signed |
| {{salesPerson}} | The email of the company user that sent the signature request |
| {{companyName}} | The name of your company |
| {{companySsn}} | The social security number of your company * |
| {{flowName}} | The name of the flow |
| {{customer.Meta.VARIABLE}} | where VARIABLE is your custom field created via smart form | 
* *if provied by you