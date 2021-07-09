import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Taktikal Documentation">
      <div className={styles.title}>
        <h1>Taktikal Docs</h1>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
