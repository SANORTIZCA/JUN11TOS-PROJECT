import React from 'react';
import './ayuda.css';

function HelpPage() {
  return (
    <div className="help-container">
      <h2>Preguntas Frecuentes</h2>
      <div className="question">
        <h3>¿Dónde y cómo puedo comprar un abono de temporada?</h3>
        <p>
Puedes comprar un abono de temporada en línea a través de nuestro sitio web oficial o en persona en la taquilla del estadio. 
Para comprar en línea, visita la pestaña "inicio" y sigue las instrucciones. 
Si prefieres la compra en persona, visita la taquilla del estadio durante las horas de atención.
        </p>
      </div>
      <div className="question">
        <h3>¿Qué pasa si no puedo ir al evento? ¿Puedo pasarle mi entrada a alguien?</h3>
        <p>
          Si después de intentar organizar todo para ir al evento de tu interés
          no te es posible asistir, siempre podrás transferirle tu entrada a la
          persona que desees. Podrás ingresar a tu perfil en la página y darle en la sección
          Gestiona tu entrada y darle al botón Transfiere tu entrada e ingresa los datos que allí se
          solicitan para realizar el proceso de forma correcta.
        </p>
      </div>
      <div className="question">
        <h3>¿Desde qué edad se permite el ingreso a los eventos?</h3>
        <p>
          Depende, cada evento tiene sus propias condiciones según las especificaciones
          de los organizadores. Seguramente en algunos no se permitirá el ingreso a
          menores, en muchos otros con la tarjeta de identidad podrán ingresar. Lo importante
          es validar en el evento de interés en la sección de Condiciones generales cuáles son las
          especificaciones para el ingreso.
        </p>
      </div>
      <div className="question">
        <h3>Tengo problemas para transferir mi entrada ¿Qué puedo hacer?</h3>
        <p>
          Primero te invitamos a que valides que estés ingresando la información de forma correcta; de igual forma,
          si después de validar no puedes realizar el proceso de forma correcta, usa la opción Contacto que encontrarás
          en el menú, en la parte superior a la derecha.
        </p>
      </div>
      <div className="question">
        <h3>¿Qué partidos o eventos están incluidos en el abono?</h3>
        <p>
El abono de temporada incluye todos los partidos de la temporada regular en casa. 
No incluye partidos de postemporada u otros eventos especiales que no sean parte de la temporada regular.
        </p>
      </div>
    </div>
  );
}

export default HelpPage;
