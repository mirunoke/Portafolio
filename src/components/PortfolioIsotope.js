import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://dev-web.uniroom.app/" target="_blank">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/UniRoom.png"
                        alt="UniRoom"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> FrontEnd </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://dev-web.uniroom.app/ " target="_blank">
                    <a>UniRoom</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Plataforma para gestionar habitaciones y reportes financieros,
                    diseñada con un enfoque en una experiencia de usuario intuitiva y procesos eficientes.
                  </p>
                </div>
                <Link legacyBehavior href="https://dev-web.uniroom.app/">
                  <a className="lnk" target="_blank">Visitar</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://www.addvitae.com/" target="_blank">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/AV.png"
                        alt="UniRoom"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> FrontEnd </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://www.addvitae.com/" target="_blank">
                    <a>Add Vitae</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Plataforma promocional para servicios de salud y capacitación en primeros auxilios,
                    diseñada con un enfoque visual atractivo y funcional.
                  </p>
                </div>
                <Link legacyBehavior href="https://www.addvitae.com/">
                  <a className="lnk" target="_blank">Visitar</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <img
                    decoding="async"
                    src="assets/images/euro.png"
                    alt="Euroimmun"
                  />
                  <span className="overlay" />
                </div>
              </div>
              <div className="desc">
                <span className="category"> FrontEnd </span>
                <h5 className="name">
                  <a>Euroimmun</a>

                </h5>
                <div className="text">
                  <p>
                    Plataforma web diseñada para digitalizar y automatizar la gestión documental del área de calidad, permitiendo la creación,
                    validación y seguimiento de documentos con control de versiones, flujos de aprobación, roles jerárquicos y trazabilidad completa.
                  </p>
                </div>
                <p>Acceso exclusivo para Euroimmun</p>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <img
                    decoding="async"
                    src="assets/images/HCA.png"
                    alt="Gooir"
                  />
                  <span className="overlay" />
                </div>
              </div>
              <div className="desc">
                <span className="category"> Fullstack Development </span>
                <h5 className="name">
                  <Link legacyBehavior href="">
                    <a>Hospitales Cruz Azul</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    El sistema de gestión de empleados fue rediseñado para optimizar procesos y análisis de datos,
                    con un enfoque en mejorar la eficiencia operativa.
                  </p>
                </div>
                <p>
                  Acceso exclusivo para HCA
                </p>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>




        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
