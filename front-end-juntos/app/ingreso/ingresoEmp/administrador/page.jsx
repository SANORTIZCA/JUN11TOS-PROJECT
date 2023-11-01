import React from 'react';
import Link from 'next/link';
import "./administrador.css";
import Crudevent from "@/components/Crudevent";


const administradorpage = () => {
  return (
    <div className="container">
      <h1>Perfil Administrador</h1>
      <div>
      <Crudevent /> 
    </div>
      <div className="administrar-sistema">
        <h2>Administrar Sistema de Abonamiento</h2>
        <div className="options">
          <Link href="/mantenimiento"legacyBehavior>
            <a>Mantenimiento del Sistema</a>
          </Link>
          <Link href="/gestion-usuarios"legacyBehavior>
            <a>Gestionar Usuarios</a>
          </Link>
          <Link href="/configuracion"legacyBehavior>
            <a>Configuración del Sistema</a>
          </Link>
          <Link href="/mejoras-actualizaciones"legacyBehavior>
            <a>Mejoras y Actualizaciones</a>
          </Link>
          <Link href="/supervisar-seguridad"legacyBehavior>
            <a>Supervisar Seguridad del Sistema</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default administradorpage;

