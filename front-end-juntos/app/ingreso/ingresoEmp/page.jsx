import React from 'react';
import './ingresoEmp.css'; 

function Login() {

  return (
    <div className="login-container">
      <h2>Ingreso de Empleado</h2>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
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
        <div className="form-group">
          <label htmlFor="tipoUsuario">Tipo de Usuario</label>
          <select name="tipoUsuario">
            <option value="administrador">Administrador</option>
            <option value="gerente">Gerente</option>
            <option value="asistente">Asistente</option>
          </select>
        </div>
        <button type="submit">Ingresar</button>
    </div>
  );
}

export default Login;