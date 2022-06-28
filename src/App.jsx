import "./App.css";

import Header from "./Header";
import Hero from "./Hero";
import Feature from "./Feature";
import About from "./About";
import SecondaryFeature from "./SecondaryFeature";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feature />
      <About />
      <SecondaryFeature />
      <Testimonials />
    </div>
  );
}

export default App;
