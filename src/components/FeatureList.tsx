import { FeatureItem as FeatureItemType } from "../utils/types";
import React from "react";
import styles from "./FeatureList.module.css";
import { FeatureItem } from "./FeatureItem";

interface Props {
  id: string;
  heading: string;
  text: string;
  featureItems: FeatureItemType[];
}

export const FeatureList = ({ featureItems, id, heading, text }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <h2 id={id} className={styles.heading}>
          {heading}
        </h2>
        <p>{text}</p>
      </div>
      <div className={styles.featureItems}>
        {featureItems.map((item) => (
          <FeatureItem
            key={item.heading}
            heading={item.heading}
            text={item.text}
            iconName={item.iconName}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};
