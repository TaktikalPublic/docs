import {
  COMPANY_LINKS,
  FEATURE_ITEMS_CUSTOMERS,
  FEATURE_ITEMS_DEVS,
} from "../utils/constants";
import React from "react";
import styles from "./Footer.module.css";
import Link from "@docusaurus/Link";
import { Links } from "../components/Links";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.item}>
          <img src="/svg/LogoGreyscale.svg" width={200} />
          <p>{`Copyright © ${new Date().getFullYear()} • Taktikal Docs. Built with Docusaurus.`}</p>
        </div>
        <div className={styles.item}>
          <p className={styles.itemHeading}>Docs</p>
          <Links
            items={FEATURE_ITEMS_CUSTOMERS.map((item) => ({
              path: item.path,
              label: item.heading,
            }))}
          />
        </div>
        <div className={styles.item}>
          <p className={styles.itemHeading}>For Devs</p>
          <Links
            items={FEATURE_ITEMS_DEVS.map((item) => ({
              path: item.path,
              label: item.heading,
            }))}
          />
        </div>
        <div className={styles.item}>
          <p className={styles.itemHeading}>The Company</p>
          <Links items={COMPANY_LINKS} />
        </div>
      </div>
    </footer>
  );
};
