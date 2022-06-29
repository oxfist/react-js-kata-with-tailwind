import shape from "./images/testimonial/testimonial-shape.svg";
import dots from "./images/testimonial/testimonial-dots.svg";
import firstTestimonial from "./images/testimonial/testimonial-1.png";
import secondTestimonial from "./images/testimonial/testimonial-2.png";

// TODO: agregar imágenes
const USERS = [
  { name: "Marisol Hidalgo", occupation: "Engineer", verified: true },
  { name: "Pascuala Flores", occupation: "Photographer", verified: true },
  { name: "Alicia Méndez", occupation: "Journalist", verified: false },
  { name: "Emilia Díaz", occupation: "Chef", verified: true },
  { name: "Amanda González", occupation: "Artist", verified: false },
  { name: "Martina Cifuentes", occupation: "Car Mechanic", verified: true },
  { name: "Francisca Poblete", occupation: "Carpenter", verified: true },
  { name: "Javiera Morales", occupation: "Designer", verified: false },
];

/*
 *
 * EJERCICIOS JAVASCRIPT
 *
 */

/* 1. Muestra solo el primer nombre de personas verificadas */
/* 2. Ordenar personas por primer nombre, descendente */
/* 3. Calcular el número de personas verificadas que entregan su testimonio */

/*
 *
 * EJERCICIOS REACT
 *
 */

/* 1. Muestra el nombre de la persona en un alert cada vez que se hace click en la foto */
/* 2. Cuando se hagan 5 clicks en la foto, invertirla verticalmente */

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="testimonial-section pt-8 pb-25 sm:p-0 lg:py-170"
    >
      <div className="container">
        <div className="section-title text-center">
          <h1 className="mb-8">What our customers says</h1>
        </div>

        <div className="testimonial-active-wrapper relative">
          <div className="shapes">
            <img
              src={shape}
              alt=""
              className="shape shape-1 hidden lg:block -left-25 top-1/2 transform -translate-y-1/2"
            />
            <img
              src={dots}
              alt=""
              className="shape shape-2 hidden lg:block left-150 -bottom-110 lg:-bottom-13 lg:w-1/4 xl:w-max"
            />
          </div>

          <div className="testimonial-active">
            <div className="single-testimonial">
              <div className="row flex">
                <div className="w-full lg:w-5/12">
                  <div className="testimonial-img inline-block lg:block text-left lg:text-right relative mb-8 lg:mb-0">
                    <img
                      src={firstTestimonial}
                      alt=""
                      className="lg:ml-auto"
                      style={{ width: "222px" }}
                    />
                    <div className="quote">
                      <i className="lni lni-quotation"></i>
                    </div>
                  </div>
                </div>

                <div className="w-0 lg:w-1/12"></div>
                <div className="lg:w-6/12">
                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text-lg leading-7 mb-8">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed dinonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren, no sea takimata sanctus est Lorem.
                      </p>
                    </div>
                    <div className="info">
                      <h4 className="mb-3">Jonathon Smith</h4>
                      <p>Developer and Youtuber</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="single-testimonial">
              <div className="row flex">
                <div className="w-full lg:w-5/12">
                  <div className="testimonial-img inline-block lg:block text-left lg:text-right relative mb-8 lg:mb-0">
                    <img
                      src={firstTestimonial}
                      alt=""
                      className="lg:ml-auto"
                      style={{ width: "222px" }}
                    />
                    <div className="quote">
                      <i className="lni lni-quotation"></i>
                    </div>
                  </div>
                </div>

                <div className="w-0 lg:w-1/12"></div>
                <div className="lg:w-6/12">
                  <div className="content-wrapper">
                    <div className="content">
                      <p className="text-lg leading-7 mb-8">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed dinonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren, no sea takimata sanctus est Lorem.
                      </p>
                    </div>
                    <div className="info">
                      <h4 className="mb-3">Gray Simon</h4>
                      <p>UIX Designer and Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
