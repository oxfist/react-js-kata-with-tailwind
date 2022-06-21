import aboutFirstImage from "./images/about/about-1.png";
import aboutLeftShape from "./images/about/about-left-shape.svg";
import leftDots from "./images/about/left-dots.svg";

import aboutSecondImage from "./images/about/about-2.png";
import aboutRightShape from "./images/about/about-right-shape.svg";
import rightDots from "./images/about/right-dots.svg";

export default function About() {
  return (
    <>
      <section id="about" className="about-section relative z-10 pt-150">
        <div className="container">
          <div className="row flex items-center">
            <div className="w-full lg:w-1/2">
              <div className="about-img relative z-10 pt-19 pb-19 mb-18 lg:mb-0">
                <img src={aboutFirstImage} alt="" className="w-100" />
                <img src={aboutLeftShape} alt="" className="shape-1" />
                <img src={leftDots} alt="" className="shape shape-2" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="about-content">
                <div className="section-title mb-8">
                  <h1 className="mb-6">
                    Perfect Solution Thriving Online Business
                  </h1>
                  <p className="">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    dinonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <a
                  href="javascript:void(0)"
                  className="main-btn btn-hover border-btn"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="about-section pt-150">
        <div class="container">
          <div class="row flex items-center">
            <div class="w-full lg:w-1/2">
              <div class="about-content">
                <div class="section-title mb-8">
                  <h1 class="mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                    Easy to Use with Tons of Awesome Features
                  </h1>
                  <p class="">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                <ul class="about-feature">
                  <li>Quick Access</li>
                  <li>Easily to Manage</li>
                  <li>24/7 Support</li>
                </ul>
                <a
                  href="javascript:void(0)"
                  class="main-btn btn-hover border-btn"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div class="w-full lg:w-1/2 order-first lg:order-last">
              <div class="about-img-2 relative z-10 pt-19 pb-19 mb-18 lg:mb-0">
                <img src={aboutSecondImage} alt="" class="w-100" />
                <img src={aboutRightShape} alt="" class="shape shape-1" />
                <img src={rightDots} alt="" class="shape shape-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
