import React from 'react';
import Link from 'next/link';
import "./Crudevent.css"


const crudabono = () => {
  return (
    <div className="container">
      <div className="abono-options">
        <h2>Configurar-Abonos</h2>
        <div className="options">
          <Link href="/crear-evento"legacyBehavior>
            <a>Crear Abono</a>
          </Link>
          <Link href="/mostrar-abono"legacyBehavior>
            <a>Mostrar Abono</a>
          </Link>
          <Link href="/actualizar-abono"legacyBehavior>
            <a>Actualizar Abono</a>
          </Link>
          <Link href="/eliminar-abono"legacyBehavior>
            <a>Eliminar Abono</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default crudabono;