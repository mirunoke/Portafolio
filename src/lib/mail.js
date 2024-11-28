// src/lib/mail.js

import { Resend } from 'resend';

// Utiliza la variable de entorno para tu clave API
const resend = new Resend("re_dTEeYWXq_5xoeHzv9Sp5RmUG1ks87acaj");

// Función para enviar confirmación al usuario que te contactó
export const sendContactConfirm = async (email, name) => {
  await resend.emails.send({
    from: 'Gigdem Galvan <no-reply@gigdemgalvan.com>',
    to: email,
    subject: 'Gracias por contactarme',
    html: `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <p>Hola ${name},</p>
          <p>He recibido tu mensaje y me pondré en contacto contigo pronto.</p>
          <p>Saludos,<br/>Gigdem Galvan</p>
        </body>
      </html>
    `,
  });
};

// Función para enviarte un correo con los detalles del contacto
export const sendNotificationEmail = async (name, email, subject, message) => {
  await resend.emails.send({
    from: 'Formulario de Contacto <no-reply@gigdemgalvan.com>',
    to: 'gigdemgalvan@gmail.com',
    subject: `Nuevo mensaje de contacto de ${name}`,
    html: `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <p>Tienes un nuevo mensaje de contacto:</p>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        </body>
      </html>
    `,
  });
};
