---
  title: "Documents"
  description: "Information Security Policies"
  date: 2020-01-11T14:09:21+09:00
  draft: false

---

## IT Security Roles and Responsibilities Policy

#### Standards

- **Security Responsibility** - Information Security is the sole responsibility of Taktikal’s Network and Security teams. They are responsible for the following:
  - Monitoring for and analyzing security events.
  - Creating information security and incident response policies and procedures.
  - Controlling access to all Taktikal data, including Signee Data.
  - Administering user accounts and access rights.
  - Distributing all policies and other information relevant to information security to all business units and employees.
- **Security Policy Responsibility** - The creation of policies as well as the management of Taktikal’s information security is the responsibility of Taktikal’s Director of Tech Services.
- **Security and Tech Procedure Responsibility** – The management of information security and technology procedures is the responsibility of Taktikal’s Director of Tech Services. Procedures must be updated as new security vulnerabilities are discovered, at least bi-annually.
- **Annual Policy Review** - All information security policies must be reviewed and updated to reflect any changes to environment or risk at least yearly.
- **Annual Risk Assessment** – Taktikal must undergo an organization wide Risk Assessment at least annually to identify threats and vulnerabilities to their business and environment. The result of this risk assessment must be documented in a formal process and result document.
- **24 Hour Information Security Monitoring** – Taktikal must have designated personnel monitoring for and responding to security alerts 24x7x365 based on their criticality and as outlined in their incident response policies.
- **Training** – IT Administrators who are responsible for following up on security events must undergo security training relevant to response to security events and system hardening at least once every two years.

#### 3rd Party Management

- **Due Diligence** – Prior to engaging with any 3rd party who will have digital or physical access to Taktikal’s environment or will be managing Taktikal’s environment, Taktikal must review the security controls surrounding the vendor to ensure they meet or exceed Taktikal’s security policies.
- **Service Provider Annual Review** – Taktikal must review the security programs of their vendors with the above stated access annually and ensure their relevant compliance to PCI-DSS as needed.

## Networks, Routers, Wireless, and Firewalls

All of Taktikal’s environments in Azure are part of Azure’s managed service offering.
Firewalls must be in place to secure external access into the environment and to restrict access out of the environment according to the least privilege principle, meaning only what is necessary. All remote access must be via VPN using mfa. A web application firewall must allow only necessary types of communication.
All major changes to the network setup must go through the Taktikal change management process.
Network diagrams and data flows must be updated as part of the change management process. The current network diagram is here: https://app.diagrams.net/#G18R66IVTp2KgoPn9oD_QbyaTWHrIpHFX9
All employee computers must have the personal firewall installed and enabled. (fjarlægja ef ósammála)

Details:
https://docs.google.com/document/d/1fEG0T4Geoq1ULqCBSb_jsK5tLNGJw9kkAHgEjLuvB_o/edit#ls -

Fjarlægja (Hérna erum við að fara að setja upp grunnlýsingu á þeim reglum sem gilda er snúa að netkerfum og þjónustum.)

## Logical Access Control Policy

#### User accounts standards

All employees are required to use strong unique passwords for all systems and services. Employees are responsible for the security of their accounts and must use mfa wherever possible, which includes all Taktikal services and systems. Access is created based on roles and the least privilege principle.

see details: https://docs.google.com/document/d/1JGVMZe81Le1T8TS_G9INYFoWQLWGrU4EGS3RdUVbU4g/edit?usp=sharing

#### Service accounts standards

All service accounts are required to use strong unique passwords for all systems and services. IT managers are responsible for the security of the accounts. Access is created based on roles and the least privilege principle.
See details :
https://docs.google.com/document/d/1mVpj6pzEWrp6-84DXNA0dqOwC9iqi-zNDuCWjKFbYWs/edit?usp=sharing

#### Vendor and Contractor Access

- **Only When Needed** - Access for authorized 3rd parties who manage, support, maintain, or access systems or network devices must be disabled when not being actively utilized and enabled only when needed.
- **Vendor Access Requests** - Accounts utilized by 3rd parties must follow these Logical Access Policies and all of Taktikal’s Information Security policies and procedures.
- **Vendor Account Monitoring** - Accounts utilized by 3rd parties must be actively monitored while being utilized.

## Systems

#### Configuration Standards

- **Time Synchronization** - Systems must be configured to sync their time to an internal and central NTP timeserver.
- **Primary Function** - Servers shall be purposed to be of one primary function.
- **Security** – All system security parameters must be configured to prevent misuse of the system, applications, or data.
- **Necessary Functionality** - Only necessary services and protocols will be enabled and security configured. Enabled services and security features for all services must clearly document their purpose.
- **Insecure Configurations** – Any insecure services or configurations must be clearly documented along with the compensating security controls that assist in protecting the system.
- **Disable Unnecessary Functionality** - Any unnecessary functionality must be removed from the systems, including, but not limited to, scripts, drivers, applications, services, and features.
- **Anti-Virus** - Anti-Virus must be installed on all systems and updated regularly as updates become available.
- **Personal Firewalls** - Any mobile or employee-owned systems must have local personal firewalls enabled. This local personal firewall must not be able to be modified or disabled by the user.
- **Labeling** - All systems must be labeled to identify the system purpose, owner, and contact details.
- **File Integrity Monitoring** – All servers must be configured with file integrity monitoring to scan and detect and notify of any changes to critical configuration files, operating system files, or application files at least weekly. Any critical changes must be notified of and followed up in relation to Taktikal’s Audit Logging Policy.

#### Ongoing Management

- **New Vulnerability Information** - Taktikal shall keep updated of new emerging security vulnerabilities and risks through industry leading external sources, including Microsoft’s security notifications.
- **Patch Deployment** - Critical system and application security patches must be installed within 30 days of their release by the vendor. All other levels of security patches must be applied within 90 days of their release by the vendor. Deployment of patches must follow Taktikal’s change management procedures.
- **Required Patches** – Taktikal shall review systems for required 3rd party application patches and not just operating system patches, for applications including, but not limited to, Java, Flash, Adobe Reader, and other approved applications.
- **Inventory** – A complete inventory must be kept and updated at least annually, of all IT systems. This should include system name, IP address, type, and location. Examples of systems to be included are servers, workstations, switches, wireless AP’s, firewalls, etc…)

#### Time Data

- **Method** – Taktikal shall utilize NTP to sync their systems and network devices local time clocks. External time servers shall be referenced only by designated central time servers with internal servers querying their time over NTP to the internal central time servers.
- **Time Zone** – Systems shall ensure to sync their time to UTC standard time. Local time zones may be applied to the system, but time synchronization must be in UTC.
- **Trusted Sources** – Taktikal shall only utilize industry-recognized time sources for synchronization of time data to internal systems. At this time, Taktikal is utilizing time.windows.com to their central NTP server.
- **Peering** – Internal Central timeservers shall peer with each other to ensure accurate time keeping.
- **Time Server Security** – Taktikal shall utilize Windows built-in NTP services and patch in accordance to their patching policy to ensure security is kept current.
- **Access** – Access to modify time data is limited to only IT Administrators managing the timeserver, and those with the business need to access the time data.
- **Changes** – Any changes to time settings on systems are logged, monitored, and reviewed in accordance to the logging policies.

## Data Classification, Retention, and Destruction

#### Summary

Taktikal might handle highly sensitive data during its processing for clients. All data needs to be handled with the utmost care in processing, displaying, delivering and deleting after usage. If not stated, all data should be treated as confidential and should not be shared by other methods than within services that Taktikal provides. If for some reason a client cannot access the data via the client Taktikal directors need a confirmation from the client to be able to retrieve the data by other means, those processes should be logged.
See details: Data Classification Standards

## Human Resources and Physical Security

#### Standards

- **Security Awareness** - All users who handle cardholder data must go through security awareness training prior to hire as well as re-review this training annually. Outside of annual training, occasional reminders of the importance of Information Security shall be emailed and provided in optional training by Taktikal’s IT team.
- **Background Checks** - Background checks must be performed on potential employees, contractors, and vendors who will or may have access to bulk amounts of credit card data prior to hire.
- **Annual Review of Security Policy by Employees** - All employees must read and acknowledge in writing that they have read and understand Taktikal’s information security policies, as outlined in their employee handbook, at least annually. All IT administrators must acknowledge in writing that they have read and reviewed the additional security policies relevant to their role.
- **End-User Messaging** - Credit Card Data may never be sent utilizing email, instant messaging, or any other end-user messaging technology.
- **Copying of Data** - Cardholder data may never be copied, moved, or otherwise stored on user’s hard drives or removable media, whether encrypted or not.

#### Badge Access Process

- **Administration** – The badge system shall be administered and maintained by Patrick Henry College’s security.
- **Employees Only** – Badges shall be created only for Taktikal employees. Visitors, Vendors, and Contractors must be escorted and will not be provided badges.
- **Badge Access Request or Modification** – Requests for access badges is provided to Taktikal’s IT team in writing. Taktikal’s IT team will in turn review the request, approve if required for their job function, and request the creation, modification, or deletion of badge access to Patrick Henry College’s security team.

#### Visitors

- **Visitor Log** – A visitor log must be maintained of any visitor who enters any room in which cardholder data is stored or transmitted, including computer rooms. Visitor log must include the visitor’s name, firm they represent, and Taktikal employee escorting them.
- **Visitor Log Retention** – Visitor logs must be securely retained for at least 3 months.
- **Visitor Identification** – Visitors who access areas where cardholder data is stored or maintained must where a clearly identifiable badge indicating they are visitors and must surrender this badge upon leaving the facility.

#### Video Cameras and/or Access Control

- **Monitoring Physical Access** – Any physical area with cardholder data, including digital and paper, must be covered by a security camera or utilize a secure badge access system that requires all individuals to badge in before entering the space.
- **Retention of Monitoring** – Video Camera Recordings and Badge Logs must be retained for online searching for at least 90 days.

## Key Management

#### Standards

- **Cardholder Data** – Digital cardholder data must be stored encrypted at all times. Cardholder data has been approved only to be stored on encrypted fields on DB_1 database as well as APP_1’s internal database server.
- **Algorithm and Key Strengths** – Taktikal has approved the minimum use of AES-128 bit or 3DES 160-bit as the only acceptable algorithms to encrypt cardholder data. Encryption shall be performed entirely by MSSQL’s built in encryption.
- **Key Storage** – Online encryption keys may be stored only utilizing MSSQL’s built in certificate storage and protected against direct read access and separate from the key encrypting keys.
- **Cryptoperiod** – Encryption Keys protecting cardholder data must be changed at least once every 2 years.
- **Protection** – Encryption keys must be protected against unauthorized access and substitution.

#### Key Custodians

- **Number of People** – Taktikal shall entrust distributing only parts of encryption keys to only four (4) IT administrators for the decryption and encryption of data, and require at least 2 of them to create the key together and that no portion of the key could be reconstructed without the other together.
  Key Custodian Agreement - All key custodians must sign and acknowledge their responsibility in protecting their portion of the key.

#### Key Rotation

- **Replacement of Keys** – Should any individual with knowledge of any encryption private keys (or the keys protecting these encryption keys) leave Taktikal, the keys have ended their crypto period, or these keys become otherwise compromised, Taktikal shall immediately generate and rotate to a new set of encryption and decryption keys as well as re-encrypt all data encrypted with the previous key with the new keys.
- **Key Generation** – Generated key must utilize a secure random number generator provided by trusted generation procedures built in to Windows MSSQL.
- **Distribution of Keys** – Keys must be manually and securely distributed and loaded on to relevant systems by only key holders.
- **Retirement of Keys** – Once a key is retired or rotated away from, it may be stored only offline in a safe in case of required future use for up to 3 years. The key must be securely destroyed after 3 years in accordance with Taktikal’s data destruction policy.

## Software Development

#### Standards

The following standards are required for development:

- **Development Accounts** - Custom and Test accounts and data must be removed from the application prior to deploying to production.
- **Use of Credit Cardholder Data** - Real/Live Primary Account Numbers (PANs) shall never be utilized for testing or development.
- **Separation of Environments** - Development environments and test/QA environments must be on separate systems than the production environment.
- **Secure Development** – All applications must be developed with security in mind, and prevent against key vulnerabilities, including, but not limited to, Injection Flaws, Buffer Overflows, Insecure Cryptography, Insecure Communications, Improper Error Handling, Cross Site Scripting, Cross Site Request Forgery, Improper Access Control, and any other vulnerability considered to be “High” by Taktikal’s vulnerability classifications.
- **Secure Development Education** – Developers must be knowledgeable of, at a minimum, the OWASP Top 10 and SANS Common Security Errors in Programing, and are required to review these documents annually.

#### Process

Taktikal’s SDLC has been based on numerous industry best practices tailored to fit their unique and small development environment. All applications internally developed by Taktikal shall follow the following Software Development Live Cycle (SDLC). All phases of a development request must be tracked in Taktikal’s ticketing system.

- **Request** – Requests will be made my management and business unit leads to Taktikal’s IT Directors for approval. Approved requests will be assigned and entered into Taktikal’s ticketing system for tracking at this time.
- **Planning and Requirements Analysis** – Taktikal’s Development Team members will review the request and determine the requirements for successful execution and impact of the development.
- **Design and Development** – Taktikal’s developers will develop the requested application or changes within their development environment. Design shall be reviewed by peers to review the security impact of the planned changes.
- **Testing** – Taktikal’s developers will test amongst other developers as well as with the user who requested the development to ensure the application meets their requested needs and functions as required. Testers will be provided with the requested changes and any testing parameters to ensure that the application is fully reviewed for Quality Assurance purposes. Tester feedback will be provided in writing and logged in the ticketing system to provide tracked lessons learned.
- **Peer Code Review** – Upon successful testing, any changes to code must be reviewed by a member of the development team who a) did not work on the code and b) is knowledgeable in the code base, and c) is knowledgeable in code security and the vulnerabilities affecting the application. Any findings from this review must be resolved prior to deployment and be reviewable my management prior to deployment.
- **Approval** – Upon final testing and code review, deployment approval will be granted by one of Taktikal’s IT Directors.
- **Deployment** – Upon final written approval, the code is deployed into production by an IT Administrator who did not write the application and who has the job role of administration of the target environment the code is being deployed to. All deployments will follow Taktikal’s change management procedures.
- **Secondary Security Review** – Upon deployment, Taktikal’s IT team will test, scan, and review a second time any previously undetected security issues that may exist with the application.
- **Maintenance and Vulnerability Managemen**t– Maintenance of the deployed application shall be the responsibility of the IT Administrator responsible for the system the application is deployed to. Should any issues arise, the IT administrator of the deployed system will work with the developer in resolving any bugs, security vulnerabilities, or issues. Should any issues be discovered, development of a patch to resolve these issues will follow the same and full SDLC process.
- **End of Life** – Upon deemed end-of-life of the application, Taktikal’s IT Administrator responsible for the affected system will be responsible for fully removing the end-of-life application from the environment.

## Change Management

#### Process

- **Change Requests** – All Change Requests must be submitted as a Gitlab issue to the correct project. The issue needs to have the appropriate tags to identify the type of work such as feature, bug or enhancement. Taktikal management will give the go ahead for issues to be worked on in each sprint. Each issue is a separate branch to the codebase and can only be merged with the development environment when all tests and peer review is complete.
  When Taktikal engineer starts to work on an issue the following factors need to be taken into account:
  - Think defend. Is any of the data vulnerable and can cause the end user harm.
  - If a new 3rd party package needs to be added validate the package to minimize risk of data breach.
  - If possible create unit and integration tests that will test the code.
  - Run existing tests to make sure nothing is broken by changing the code.
- **Approval** – Approval for any change shall be granted only by Taktikal’s IT Directors and Frontend lead for frontend development through the ticketing system.
- **Emergency Change Management** – Should an emergency issue arise that is impacting the operation of Taktikal’s environment and an IT director is unreachable for approval, Taktikal’s IT Administrators may peer-approve changes amongst other IT Administrators of the target environment in the interim. While peer approval is acceptable to resolve the emergency issue, all changes must be documented and post-approved by Taktikal’s IT Director in the ticketing system. Use of emergency change management is limited to critical issues and must not be utilized as an on-going process.
- **Change Documentation** – All applied changes will be documented in the change request ticket as soon as the change is performed. Should additional procedures for managing the applied change be required, an additional ticket must be created to track the requirement to create these procedures.

#### Change Request Requirements

All change requests are required to have the following:

- **Impact** – All change request tickets must clearly document the impact of the change, such as the systems it affects or what additions are being made.
- **Approval** – All change request tickets must clearly document the authorized individual approving the change.
  Testing - All system changes must be tested to ensure that the change did not adversely affect the security of the system and were successfully made.
  Code Review or Testing - When custom-developed code is being deployed to production, it must be tested or reviewed to ensure it is not vulnerable to the vulnerabilities outlined in Taktikal’s SLDC.
- **Backout Procedure** – All change requests must include the procedure to undo any changes to the system in case of an unsuccessful change or other negative impact caused by the change.

## System and Network Security

#### Vulnerability Scanning

- **External Vulnerability Scanning** – External Vulnerability Scanning must occur at least quarterly and after any significant network change. All external vulnerability scanning must be performed by a PCI Approved Scanning Vendor (ASV).
- **Internal Vulnerability Scanning** – Internal Vulnerability Scanning must occur at least quarterly and be performed by a member of the IT team who is has organizational independence from the remediation of any discovered issues.
- **Significant Environment Changes** – Taktikal must re-scan their environment upon any significant change, such as modifications to firewall rules, changes to the application codebase, or addition of additional servers or applications.
- **Re-scans** – Rescans must occur of the environment until passing results are obtained with no findings with a CVSS score higher than 4.0 or any other “High” Vulnerabilities.

#### Penetration Testing

- **Scope** – Penetration Testing must be performed against all of Taktikal’s Externally Facing IPs as well as Taktikal’s entire Internal Environment.
  Required Targets - Penetration testing must be performed against the network as well as the applications.
- **Occurrence** – External and Internal penetration testing must be performed at least annually.

## Audit Logging Policy

## Logging Requirements

Significant security impacting events must be automatically logged into a secure audit trail on Taktikal’s systems. The following are a minimum of what must be logged:

- **Event Information** – All events must include the date and time of occurrence, the user causing the event, the type of event, success or failure, source IP address and (if applicable) application generating the event, and the affected data, component, or resource.
- **User Access to Cardholder Data** – All user access to cardholder data must be logged to attribute what cards they accessed.
- **Administrative Actions** – All activity performed by system, application, or database administrators must be logged.
- **Audit Trail Access** – All attempts to access and queries made against the audit trails must be logged.
- **Invalid Logical Access** – Any failed access attempts to a service, network, or resource must be logged.
- **Initialization of Logs** – The initialization of the logs or re-initialization of logs must be indicated.
- **Creation or Deletion of System Level Objects** – Any modifications to a system’s configuration or changes to Active Directory must be automatically logged.
- **Intrusion Detection System Alerts** – Alerts of any suspected compromises detected by Taktikal’s IDS must be logged.

#### Log Retention Requirements

- **Central Storage** – All servers must back their logs up to an internal and protected central log server to protect the integrity of audit trails.
- **Online Retention** – All audit logs must be able to be queried online for at least 90 days.
- **Offline Retention** – All audit logs must be stored for at least 1 year. Stored logs may be available for online searching, or backed up offline after the 90 days.

#### Monitoring and Security Event Alerts

Logs may be accessed only by Taktikal’s IT administrators who have the job-related need to view these audit trails.

- **Requirements** – All Taktikal logs must be monitored for indications of compromised security 24x7x365. Taktikal must additionally review logs for all systems daily for any anomalies and changes.
  Response – Any events discovered to indicate a compromise to Taktikal’s security posture must follow Taktikal’s incident response procedure.

## Incident Response Policy

#### Incident Standards and response

When incidents happen on Taktikal systems, they need to be handled correctly.
Incidents differ in severity and urgency and therefore a variety of responses needs to be implemented.

- For downtime of Taktikal services or security vulnerabilities that need immediate attention are led by Taktikal CTO and COO.
  For data breach, the CEO will lead the response with the help of CTO and COO. The CEO is responsible for contacting authorities and Taktikal customers.
  Should any external contact to law enforcement or other 3rd parties be deemed necessary due to the validity and impact of the incident, the CEO will be responsible along with Taktikal legal advice for determining the legal requirements and level of communication necessary and interfacing with the relevant 3rd parties.

If any Taktikal employee suspects or sees a possible incident she or he should report so imediatly to the CTO or the COO.

See details: Incident Standards
