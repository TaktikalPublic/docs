import { FaqItem, FeatureItem, Link } from "./types";

export const FEATURE_ITEMS_DEVS: FeatureItem[] = [
  {
    heading: "API",
    text: "API web services for signatures and authentication.",
    iconName: "ApiIcon",
    path: "/docs/api",
  },
  {
    heading: "GitLab",
    text: "Only registered users can access our GitLab group.",
    iconName: "CloudIcon",
    path: "https://gitlab.com/taktikal/docs",
  },
];

export const FEATURE_ITEMS_CUSTOMERS: FeatureItem[] = [
  {
    heading: "Portal",
    text: "The Portal is the entry point for all of Taktikal's solutions as well as where user & account management takes place.",
    iconName: "PortalIcon",
    path: "/docs/portal",
  },
  {
    heading: "Drop & Sign",
    text: "A simple way suitable for all PDF documents that are ready for signing and have been filled.",
    iconName: "DropAndSignIcon",
    path: "/docs/drop-and-sign",
  },
  {
    heading: "Fill & Sign",
    text: "Fill the form and sign PDF documents in your browser. The product enables customers to complete and sign documents - without the involvement of employees.",
    iconName: "FillAndSignIcon",
    path: "/docs/fill-and-sign",
  },
  {
    heading: "Smart Forms",
    text: "Custom integrated processes for apps and websites. Smart Forms is the most adaptable solution in Taktikal's product range.",
    iconName: "SmartFormsIcon",
    path: "/docs/smart-forms",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    heading: "How to convert multiple PDFs at the same time?",
    text: "Sending multiple PDFs at the same time is easy! All you need to do is select multiple files and those files will be included in the signing request.",
  },
  {
    heading: "How do I sign a PDF?",
    text: "When a signing request has been sent to you via SMS or e-mail, all you need to do is navigate to the signing page and sign the document with your Qualified or Standard signature.",
  },
  {
    heading: "How do I book a demo?",
    text: `Our Customer Success Manager (Björt) will gladly take you on a tour of our solutions. You can book a meeting <a href="https://meetings.hubspot.com/bjoert/kynning-a-vorum-taktikal" target="_blank">here</a>.`,
  },
  {
    heading: "How do I upload a document?",
    text: "For Drop & Sign, see <a href='docs/drop-and-sign/senda-skjal-i-undirritun'>here</a>. For Fill & Sign, see <a href='docs/fill-and-sign/creating-your-first-document'>here</a>.",
  },
  {
    heading:
      "Can the document be changed after the signing process has started?",
    text: "No, the document cannot be changed afterwards.",
  },
  {
    heading: "How do I keep the signed document with me?",
    text: "You will be sent the signed document via e-mail upon signing completion.",
  },
];

export const COMPANY_LINKS: Link[] = [
  {
    label: "Help",
    path: "https://taktikal.is/help",
  },
  {
    label: "About Us",
    path: "https://taktikal.is/about",
  },
  {
    label: "Contact",
    path: "https://taktikal.is/contact",
  },
];
