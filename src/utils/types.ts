interface BaseItem {
  heading: string;
  text: string;
}

export interface FeatureItem extends BaseItem {
  iconName: string;
  path: string;
}

export type FaqItem = BaseItem;

export interface Link {
  path: string;
  label: string;
}