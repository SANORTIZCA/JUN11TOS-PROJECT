import React from 'react';
import Link from 'next/link';
import "./Crudevent.css"


const crudevent = () => {
  return (
    <div className="container">
      <div className="evento-options">
        <h2>Configurar-Eventos</h2>
        <div className="options">
          <Link href="/crear-evento"legacyBehavior>
            <a>Crear Evento</a>
          </Link>
          <Link href="/mostrar-evento"legacyBehavior>
            <a>Mostrar Evento</a>
          </Link>
          <Link href="/actualizar-evento"legacyBehavior>
            <a>Actualizar Evento</a>
          </Link>
          <Link href="/eliminar-evento"legacyBehavior>
            <a>Eliminar Evento</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default crudevent;