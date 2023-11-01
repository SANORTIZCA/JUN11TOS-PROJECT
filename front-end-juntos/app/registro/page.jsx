import React from 'react';
import "./registro.css"

function RegistroUsuario() {
  return (
    <div>
      <header>
        <h2 className="centrar">Registro de usuario</h2>
      </header>
      <main>
        <section className="formulario">
          <form>
            <div className="campos">
              <div className="campo">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" required />
              </div>
              <div className="campo">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido" required />
              </div>
              <div className="campo">
                <label htmlFor="cedula">Cédula:</label>
                <input type="number" name="cedula" id="cedula" placeholder="Ingrese su cédula" required />
              </div>
              <div className="campo">
                <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
                <input type="date" name="fechaNacimiento" id="fechaNacimiento" required />
              </div>
              <div className="campo">
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" name="direccion" id="direccion" placeholder="Ingrese su dirección" required />
              </div>
              <div className="campo">
                <label htmlFor="correoElectronico">Correo electrónico:</label>
                <input type="email" name="correoElectronico" id="correoElectronico" placeholder="Ingrese su correo electrónico" required />
              </div>
              <div className="campo">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" name="telefono" id="telefono" placeholder="Ingrese su teléfono" required />
              </div>
              <div className="campo">
                <label htmlFor="contraseña">Contraseña:</label>
                <input type="password" name="contraseña" id="contraseña" placeholder="Ingrese su contraseña" required />
              </div>
              <div className="campo">
                <label htmlFor="tipoUsuario">Tipo de usuario:</label>
                <select name="tipoUsuario" id="tipoUsuario" required>
                  <option value="1">Normal</option>
                  <option value="2">Estudiante</option>
                  <option value="3">Hincha Fiel</option>
                  <option value="4">Adulto Mayor</option>
                 
                </select>
              </div>
            </div>
            <div className="botones">
              <input type="submit" value="Registrar" />
              <input type="reset" value="Cancelar" />
            </div>
          </form>
        </section>
      </main>
      <footer>
        <p>Copyright © 2023 Juntos</p>
      </footer>
    </div>
  );
}

export default RegistroUsuario;
