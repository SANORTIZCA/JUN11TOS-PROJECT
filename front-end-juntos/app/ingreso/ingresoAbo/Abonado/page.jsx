import React from 'react';
import Link from 'next/link';
import "./abonado.css";
import Crudabono from "@/components/Crudabono";


const abonadopage = () => {
  return (
    <div className="container">
      <h1>Perfil Abonado</h1>
      <div>
      <Crudabono /> 
    </div>
    <div className="consultar-evento">
        <h2>Consultar eventos</h2>
        <div className="options">
          <Link href="/Consultareventos"legacyBehavior>
            <a>Consultar eventos</a>
          </Link>
          </div>
      </div>
    </div>
  );
};

export default abonadopage;