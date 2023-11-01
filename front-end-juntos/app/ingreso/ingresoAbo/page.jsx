import React from 'react';
import './ingresoAbo.css'; 
import Link from "next/link";

function Login() {

  return (
    <div className="login-container">
      <h2>Ingreso de Abonado</h2>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario/Abonado</label>
          <input
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="botones">
      <Link href="./ingreso/ingresoAbo/Abonado">
        Ingresar
      </Link>
      </div>

    </div>
  );
}

export default Login;