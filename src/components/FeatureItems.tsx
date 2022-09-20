import React from "react";
import { FeatureItem } from "../components/FeatureItem";
import { FeatureItem as FeatureItemType } from "../utils/types";

interface Props {
  featureItems: FeatureItemType[];
}

export const FeatureItems = ({ featureItems }: Props) =>
  featureItems.map((item) => (
    <FeatureItem
      key={item.heading}
      heading={item.heading}
      text={item.text}
      iconName={item.iconName}
      path={item.path}
    />
  ));
