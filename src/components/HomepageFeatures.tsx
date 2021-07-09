import React from 'react';
import './HomepageFeatures.css';
import Link from '@docusaurus/Link';
import '../css/custom.css';

const FeatureList = [
  {
    title: 'Smart Forms',
    href: '/docs/smart-forms',
    Svg: require('/img/homepage/smart_forms.svg').default,
    description: (
      <>
        Custom integrated processes for apps and websites. Smart Forms is the
        most adaptable solution in Taktikal's product range.
      </>
    ),
  },
  {
    title: 'Drop & Sign',
    href: '/docs/drop-and-sign',
    Svg: require('/img/homepage/drop_and_sign.svg').default,
    description: (
      <>
        A simple way suitable for all PDF documents that are ready for signing
        and have been filled.
      </>
    ),
  },
  {
    title: 'Fill & Sign',
    href: '/docs/fill-and-sign',
    Svg: require('/img/homepage/fill_and_sign.svg').default,
    description: (
      <>
        Fill the form and sign PDF documents in your browser. The product
        enables customers to complete and sign documents - without the
        involvement of employees.
      </>
    ),
  },
  {
    title: 'API',
    href: '/docs/api',
    Svg: require('/img/homepage/api.svg').default,
    description: <>API web services for signatures and authentication.</>,
  },
];

function Feature({ Svg, title, description, href }) {
  return (
    <div className="col col--3 feature_item">
      <Link href={href}>
        <div className="text--center">
          <Svg className="featureSvg" alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
