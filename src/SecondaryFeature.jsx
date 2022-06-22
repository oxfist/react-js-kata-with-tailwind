const FEATURE_ITEMS = [
  "SaaS Focused",
  "Awesome Design",
  "Ready to Use",
  "Vanilla JS",
  "Essential Sections",
  "Highly Optimized",
];

const FEATURE_ITEMS_ALL = [
  { title: "SaaS Focused", enabled: true },
  { title: "Time Travel", enabled: false },
  { title: "Awesome Design", enabled: true },
  { title: "Ugly Colors", enabled: false },
  { title: "Ready to Use", enabled: true },
  { title: "Unreadable Code", enabled: false },
  { title: "Boring Memes", enabled: false },
  { title: "Vanilla JS", enabled: true },
  { title: "Essential Sections", enabled: true },
  { title: "Cryptocurrencies", enabled: false },
  { title: "Highly Optimized", enabled: true },
];

function FeatureHeader() {
  return (
    <div className="row flex justify-center">
      <div className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12">
        <div className="section-title text-center mb-15">
          <h1 className="mb-6">Why Choose SaaSpal</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ title }) {
  
  return (
    <div className="w-full md:w-1/2 lg:w-4/12">
      <div className="p-8 lg:px-3">
        <div className="content">
          <h3 className="mb-5">{title}</h3>
        </div>
      </div>
    </div>
  );
}

const getEnabledItems = (items) => items.filter((item) => item.enabled === true)

function FeatureGrid() {

  return (
    <div className="row flex flex-wrap">
      {getEnabledItems(FEATURE_ITEMS_ALL).map((item)=><FeatureItem title={item.title} />)}
    </div>
  );
}

export default function SecondaryFeature() {
  return (
    <section id="why" className="feature-extended-section pt-25">
      <div className="feature-extended-wrapper py-18 bg-theme-color bg-opacity-10">
        <div className="container">
          <FeatureHeader />
          <FeatureGrid />
        </div>
      </div>
    </section>
  );
}
