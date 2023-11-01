import React from 'react';
import "./comprarabono.css"

function CompraAbono() {
  return (
    <div>
      <header>
        <h2 className="centrar">Compra de Abono</h2>
      </header>
      <main>
        <section className="formulario">
          <form action="/validarpago" method="post">
            <div className="campos">
              <div className="campo">
                <label htmlFor="nombre">Temporada:</label>
                <input type="number" name="temporada" id="temporada" placeholder="Ingrese el año/temporada que desea" required />
              </div>
              <div className="campo">
                <label htmlFor="tipoLocalidad">Tipo de localidad:</label>
                <select name="tipoLocalidad" id="tipoLoacalidad" required>
                  <option value="1">Norte</option>
                  <option value="2">Sur</option>
                  <option value="3">Occidental</option>
                  <option value="4">Oriental</option>
                </select>
              </div>
              <div className="campo">
                <label htmlFor="Asiento"># Asiento:</label>
                <input type="text" name="asiento" id="asiento" placeholder="Ingrese el asiento en que desea ubicarse" required />
              </div>
              <div className="campo">
                <label htmlFor="tipoPago">Tipo de pago:</label>
                <select name="tipoPago" id="tipoPago" required>
                  <option value="1">Tarjeta</option>
                  <option value="2">Ose</option>
                  <option value="3">Efectivo</option>
                </select>
              </div>
            </div>
            <div className="botones">
              <input type="submit" value="Comprar" />
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

export default CompraAbono;



