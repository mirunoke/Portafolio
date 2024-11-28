// components/ContactForm.js

import { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Enviando...",
      text: "Por favor espera mientras enviamos tu mensaje.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado",
          text: "¡Gracias! Me pondré en contacto contigo pronto.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} id="cform">
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="group">
          <label>
            Nombre completo <b>*</b>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="group">
          <label>
            Correo electrónico <b>*</b>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="group">
          <label>
            Asunto <b>*</b>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="group">
          <label>
            Mensaje <b>*</b>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
        <button type="submit" className="btn">
          <span>Enviar mensaje</span>
        </button>
      </div>
    </div>
  </form>
  );
};

export default ContactForm;
