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
  path: { is: string; com: string };
  label: string;
}
