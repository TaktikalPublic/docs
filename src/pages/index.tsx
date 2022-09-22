import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import { FeatureItem } from "../components/FeatureItem";
import {
  FEATURE_ITEMS_DEVS,
  FEATURE_ITEMS_CUSTOMERS,
  FAQ_ITEMS,
} from "../utils/constants";
import { FaqItem } from "../components/FaqItem";
import { Footer } from "../components/Footer";
import Link from "@docusaurus/Link";
import { FeatureList } from "../components/FeatureList";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="Taktikal Documentation">
      <section className={styles.introContainer}>
        <div>
          <h1>
            <div>Welcome!</div>
            <div style={{ marginBottom: "32px" }}>This is Taktikal Docs</div>
          </h1>
          <p>
            Here you can find documentation related to our API and products —
            from basic instructions to advanced information for developers.
          </p>
          <div className={styles.buttonContainer}>
            <div className={styles.button} style={{ marginBottom: "8px" }}>
              <Link to="#developers">
                <p>I am a developer</p>
              </Link>
              <img src="/svg/ArrowRight.svg" />
            </div>
            <div className={styles.button}>
              <Link to="#customers">
                <p>I am not a developer so just give me the basics</p>
              </Link>
              <img src="/svg/ArrowRight.svg" />
            </div>
          </div>
        </div>
        <img src="/svg/Hero.svg" />
      </section>

      <section className={styles.featureSection}>
        <FeatureList
          featureItems={FEATURE_ITEMS_DEVS}
          heading="For Developers"
          id="developers"
          text="Advanced settings and information"
        />
        <FeatureList
          featureItems={FEATURE_ITEMS_CUSTOMERS}
          heading="The Basics"
          id="customers"
          text="Basic information and detailed instructions"
        />
      </section>

      <section className={styles.featureSection}>
        <div className={styles.faqContainer}>
          <div>
            <h2 className={styles.sectionHeader}>Faqs</h2>
            <p className={styles.faqHeading}>Do you need help?</p>
            <p className={styles.faqText}>
              These are the most commonly asked questions. If your question
              isn't answered here, you can find more information in the Help &
              FAQs page:
            </p>
            <div className={styles.button}>
              <Link to="https://taktikal.is/help">
                <p>Help & FAQs</p>
              </Link>
              <img src="/svg/ArrowRight.svg" />
            </div>
          </div>
          <div className={styles.faqItemContainer}>
            {FAQ_ITEMS.map((item) => (
              <FaqItem
                key={item.heading}
                heading={item.heading}
                text={item.text}
              />
            ))}
          </div>
        </div>
        <button
          className={`${styles.button} ${styles.backToTop}`}
          onClick={() => window.scroll({ top: 0 })}
        >
          <p>Back to top</p>
          <img src="/svg/ArrowUp.svg" />
        </button>
      </section>
      <Footer />
    </Layout>
  );
}
