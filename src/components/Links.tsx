import Link from "@docusaurus/Link";
import React from "react";

interface Props {
  items: Array<{
    path: string;
    label: string;
  }>;
}

export const Links = ({ items }: Props) => (
  <>
    {items.map((link) => {
      const startsWithHttps = link.path.startsWith("https");
      return (
        <Link to={link.path} key={link.path}>
          {link.label}
          {startsWithHttps && <img src="/svg/OpenInNewTabIcon.svg" />}
        </Link>
      );
    })}
  </>
);
