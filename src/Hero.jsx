import heroBackground from "./images/hero/hero-bg.svg";
import heroImage from "./images/hero/hero-img.png";

export default function Hero() {
  return (
    <section
      id="home"
      class="hero-section relative bg-no-repeat bg-top z-10 pt-200 pb-13 lg:pb-200 2xl:pb-120"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div class="container">
        <div class="row flex items-center relative">
          <div class="w-full lg:w-1/2">
            <div class="hero-content mb-0 lg:mb-6">
              <h1 class="text-white mb-9 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
                Launch Your SaaS Website in Minutes!
              </h1>
              <p class="text-white text-lg mb-10 xl:pr-18 2xl:pr-120">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <a
                href="javascript:void(0)"
                class="main-btn border-btn btn-hover mb-2"
              >
                Get Started
              </a>
              <a href="#features" class="scroll-bottom">
                <i class="lni lni-arrow-down"></i>
              </a>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="hero-img pt-8 lg:pt-0">
              <img src={heroImage} alt="" class="w-full lg:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
