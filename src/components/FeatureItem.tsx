import { FeatureItem as FeatureItemProps } from "../utils/types";
import React from "react";
import styles from "./FeatureItem.module.css";
import Link from "@docusaurus/Link";

export const FeatureItem = ({
  heading,
  iconName,
  text,
  path,
}: FeatureItemProps) => (
  <Link href={path}>
    <div className={styles.container}>
      <img src={`/svg/${iconName}.svg`} />
      <div className={styles.textContainer}>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
      <p className={styles.button}>
        View <img src="/svg/Arrow.svg" />
      </p>
    </div>
  </Link>
);
