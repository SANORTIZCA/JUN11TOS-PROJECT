import React from 'react';
import Link from "next/link";
import "./ingreso.css"


const PaginaEleccionUsuario = () => {
  return (
    <div>
      <h1>Elige el tipo de usuario con el que desea ingresar</h1>
      <div className="botones">
      <Link href="./ingreso/ingresoEmp">
        Empleado
      </Link>
      <Link href="./ingreso/ingresoAbo">
        Abonado
      </Link>
      </div>
    </div>
  );
};

export default PaginaEleccionUsuario;

