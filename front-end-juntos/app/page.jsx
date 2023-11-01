import React from "react";
import Link from "next/link"; // Importa el componente Link
import './globals.css';

const IndexPage = () => {
  return (
    <div className="ticket-venta-container">
      {/* Utiliza el componente Link con un enlace de texto para redirigir al formulario de compra */}
      <Link href="/comprar-abono">
        Comprar Abono
      </Link>
      <p className="abonate-text">¡¡Juntos somos más, abónate!!</p>

      <h2>Próximos Eventos</h2>
      <div className="eventos-proximos">
        {/* Contenido de los próximos eventos */}
      </div>

      {/* Aquí es donde agregarás el texto */}
      <div className="fixture-text">
        <h3>FIXTURE LIGA BETPLAY 2023-2 PARTIDOS DE LOCAL</h3>
        <ul>
          {/* Agrega las 20 fechas aquí */}
          <li>FECHA 1 (20 de agosto de 2023): ONCE CALDAS - NACIONAL</li>
          <li>FECHA 3 (3 de septiembre de 2023): ONCE CALDAS - DEPORTIVO CALI</li>
          <li>FECHA 5 (17 de septiembre de 2023): ONCE CALDAS - DEPORTIVO PEREIRA</li>
          <li>FECHA 7 (1 de octubre de 2023): ONCE CALDAS - BUCARAMANGA</li>
          <li>FECHA 9 (15 de octubre de 2023): ONCE CALDAS - DEPORTIVO HUILA</li>
          <li>FECHA 11 (29 de octubre de 2023): ONCE CALDAS - ENVIGADO</li>
          <li>FECHA 13 (12 de noviembre de 2023): ONCE CALDAS - LA EQUIDAD</li>
          <li>FECHA 15 (26 de noviembre de 2023): ONCE CALDAS - IND. MEDELLÍN</li>
          <li>FECHA 17 (10 de diciembre de 2023): ONCE CALDAS - JAGUARES</li>
          <li>FECHA 19 (24 de diciembre de 2023): ONCE CALDAS - AMÉRICA DE CALI</li>
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;
