// pages/api/contact.js
import { sendContactConfirm, sendNotificationEmail } from '../../src/lib/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, subject, message } = req.body;

    try {
      // Enviar confirmación al usuario
      await sendContactConfirm(email, name);

      // Enviarte el correo con los detalles del contacto
      await sendNotificationEmail(name, email, subject, message);

      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      console.error('Error al enviar los correos:', error);
      res.status(500).json({ error: 'Error al enviar los correos' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
