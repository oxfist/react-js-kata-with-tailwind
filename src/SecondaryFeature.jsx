/**
 *
 * A continuación puedes ver 4 ejercicios disponibles para este componente.
 *
 * Para cada ejercicio cambia la constante utilizada en el componente
 * FeatureGrid.
 *
 */

/* 1. Mostrar todos los títulos */
const FEATURE_ITEMS = [
  "SaaS Focused",
  "Awesome Design",
  "Ready to Use",
  "Vanilla JS",
  "Essential Sections",
  "Highly Optimized",
];

/* 2. Mostrar todos los títulos habilitados */
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

/* 3. Mostrar todos los títulos habilitados ordenados por votos de mayor a menor */
const FEATURE_ITEMS_ALL_WITH_UPVOTES = [
  { title: "SaaS Focused", enabled: true, upvotes: 420 },
  { title: "Time Travel", enabled: false, upvotes: 500 },
  { title: "Awesome Design", enabled: true, upvotes: 317 },
  { title: "Ugly Colors", enabled: false, upvotes: 189 },
  { title: "Ready to Use", enabled: true, upvotes: 273 },
  { title: "Unreadable Code", enabled: false, uptoves: 362 },
  { title: "Boring Memes", enabled: false, upvotes: 240 },
  { title: "Vanilla JS", enabled: true, uptoves: 191 },
  { title: "Essential Sections", enabled: true, upvotes: 46 },
  { title: "Cryptocurrencies", enabled: false, upvotes: 201 },
  { title: "Highly Optimized", enabled: true, upvotes: 378 },
];

/* 4. Mostrar todos los títulos habilitados ordenados por votos de mayor a menor con sus respectivos logos */
const FEATURE_ITEMS_ALL_WITH_UPVOTES_AND_LOGOS = [
  { title: "SaaS Focused", enabled: true, upvotes: 420, logo: "lni-display" },
  { title: "Time Travel", enabled: false, upvotes: 500, logo: "lni-timer" },
  { title: "Awesome Design", enabled: true, upvotes: 317, logo: "lni-leaf" },
  { title: "Ugly Colors", enabled: false, upvotes: 189, logo: "lni-close" },
  { title: "Ready to Use", enabled: true, upvotes: 273, logo: "lni-grid-alt" },
  {
    title: "Unreadable Code",
    enabled: false,
    uptoves: 362,
    logo: "lni-help",
  },
  {
    title: "Boring Memes",
    enabled: false,
    upvotes: 240,
    logo: "lni-emoji-speechless",
  },
  { title: "Vanilla JS", enabled: true, uptoves: 191, logo: "lni-javascript" },
  {
    title: "Essential Sections",
    enabled: true,
    upvotes: 46,
    logo: "lni-layers",
  },
  { title: "Cryptocurrencies", enabled: false, upvotes: 201 },
  {
    title: "Highly Optimized",
    enabled: true,
    upvotes: 378,
    logo: "lni-rocket",
  },
];

/* Usar este componente para el ejercicio 4 */
function FeatureItemWithLogo({ title }) {
  return (
    <div class="w-full md:w-1/2 lg:w-4/12">
      <div class="p-8 lg:px-3">
        <div class="feature-icon-2 mb-8 text-theme-color leading-none">
          <i class="lni lni-leaf"></i>
        </div>
        <div class="content">
          <h3 class="mb-5">{title}</h3>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>
        </div>
      </div>
    </div>
  );
}

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

const getEnabledItems = (items) =>
  items.filter((item) => item.enabled === true);

/* 5. Arregla el error que está lanzando este componente  */
function FeatureGrid() {
  return (
    <div className="row flex flex-wrap">
      {getEnabledItems(FEATURE_ITEMS_ALL).map((item) => (
        <FeatureItem title={item.title} />
      ))}
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
