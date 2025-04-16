import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Ingeniería en Desarrollo y Gestión de Software",
    academy: "Universidad Tecnológica de Tula-Tepeji",
    dec: "Honores: Reconocimiento al mejor promedio",
    startYear: "2024",
    endYear: "2025",
  },
  {
    id: 2,
    title: "Tecnico Superior Universitario en Desarrollo de Software Multiplataforma",
    academy: "Universidad Tecnológica de Tula-Tepeji",
    dec: "",
    startYear: "2021",
    endYear: "2024",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Lead FrontEnd Architect",
    company: "StartUp UniRoom",
    dec: "Diseñé e implementé una plataforma de gestión para publicar habitaciones y manejar reportes financieros mensuales, liderando el diseño UX/UI para optimizar la experiencia de usuario.",
    startYear: "2024",
    endYear: "2024",
  },
  {
    id: 2,
    title: "Desarrollador Frontend",
    company: "Euroimmun México",
    dec: "Desarrollé el frontend de un sistema web de gestión documental para el área de calidad en INOCHEM S.A. de C.V., utilizando Next.js, TypeScript y Firebase. Implementé flujos de autenticación, formularios dinámicos, control de accesos por roles y una interfaz intuitiva que optimiza la trazabilidad y automatiza solicitudes.",
    startYear: "2025",
    endYear: "2025",
  },
  {
    id: 3,
    title: "Desarrollador FullStack",
    company: "Hospitales Cruz Azul",
    dec: "Rediseñé el sistema de gestión de empleados del área de Capital Humano, mejorando su eficiencia y actualizando funcionalidades clave, implementando clean architecture para optimizar la carga de datos en servidores y diseñando bases de datos para mejorar la correlación y análisis de entidades.",
    startYear: "2024",
    endYear: "2024",
  }
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center" style={{ padding: '100px' }}>
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resumen </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                mi <b>historia</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Educación </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experiencia </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Presente</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> Historia </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
