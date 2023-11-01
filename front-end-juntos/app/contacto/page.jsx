import React from 'react';
import './contacto.css';

function ContactPage() {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>
        No importa si tienes alguna dificultad con el portal o simplemente quieres contarnos cómo ha sido tu experiencia, estamos felices de que decidas ponerte en contacto y dispuestos a que cada vez sea mejor tu experiencia.
      </p>
      <h3>Escríbenos</h3>
      <ul>
        <li>Email: <a href="mailto:Juntos11@gmail.com">Juntos11@gmail.com</a></li>
        <li>WhatsApp: +57 3128766327</li>
        <li>Instagram: <a href="https://www.instagram.com/ju11tos/">@ju11tos</a></li>
      </ul>
    </div>
  );
}

export default ContactPage;
