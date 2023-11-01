import React from 'react';
import Link from 'next/link';
import "./gerente.css";
import Crudevent from "@/components/Crudevent";


const gerentepage = () => {
  return (
    <div className="container">
      <h1>Perfil Gerente</h1>
      <div>
      <Crudevent /> 
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

export default gerentepage;

