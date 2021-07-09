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
        Sérhannaðir ferlar til innleiðingar í app og vefsíður. Smart Forms er
        sveigjanlegasta lausnin í vöruframboði Taktikal.
      </>
    ),
  },
  {
    title: 'Drop & Sign',
    href: '/docs/drop-and-sign',
    Svg: require('/img/homepage/drop_and_sign.svg').default,
    description: (
      <>
        Drop & Sign er einföld leið sem hentar fyrir öll PDF skjöl sem eru klár
        til undirritunar og búið er að fylla út.
      </>
    ),
  },
  {
    title: 'Fill & Sign',
    href: '/docs/fill-and-sign',
    Svg: require('/img/homepage/fill_and_sign.svg').default,
    description: (
      <>
        Fylltu út og undirritaðu PDF skjöl í vafranum. Lausnin gerir
        viðskiptavinum fyrirtækja kleift að fylla út og undirrita skjöl - án
        aðkomu starfsmanna
      </>
    ),
  },
  {
    title: 'API',
    href: '/docs/api',
    Svg: require('/img/homepage/api.svg').default,
    description: <>Vefþjónustur fyrir undirskriftir og auðkenningar</>,
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
