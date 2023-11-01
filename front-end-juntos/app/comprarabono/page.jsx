/*
import { useState } from "react";
import styles from "./comprarabono.css";

// Mark this component as a Client Component
const CompraAbono = () => {
  // ...
};
CompraAbono.useClient = true;

const AbonoForm = () => {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [celular, setCelular] = useState("");
  const [correo, setCorreo] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [descuento, setDescuento] = useState(0);
  const [tipoAbondado, setTipoAbondado] = useState("");
  const [tipoLocalidad, setTipoLocalidad] = useState("");
  const [numeroAsiento, setNumeroAsiento] = useState(0);
  const [tipoPago, setTipoPago] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await useRequest({
        url: "/api/abonos",
        method: "POST",
        data: {
          tipoDocumento,
          numeroDocumento,
          celular,
          correo,
          nombres,
          apellidos,
          fechaNacimiento,
          direccion,
          contraseña,
          descuento,
          tipoAbondado,
          tipoLocalidad,
          numeroAsiento,
          tipoPago,
        },
      });

      if (response.data.success) {
        router.push("/abonos/confirmado");
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Compra de abono</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="tipoDocumento">
          <Form.Label>Tipo de documento</Form.Label>
          <Form.Select
            value={tipoDocumento}
            onChange={(e) => setTipoDocumento(e.target.value)}
          >
            {tipoDocumento.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="numeroDocumento">
          <Form.Label>Número de documento</Form.Label>
          <Form.Control type="number" value={numeroDocumento} onChange={(e) => setNumeroDocumento(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="celular">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="number" value={celular} onChange={(e) => setCelular(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="correo">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="nombres">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="apellidos">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="fechaNacimiento">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="direccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        <Form.Group controlId="descuento">
          <Form.Label>Descuento</Form.Label>
          <Form.Control type="number" value={descuento} onChange={(e) => setDescuento(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="tipoAbondado">
          <Form.Label>Tipo de abonado</Form.Label>
          <Form.Select value={tipoAbondado} onChange={(e) => setTipoAbondado(e.target.value)} >
                <option value="1">Normal</option>
                <option value="2">Estudiante</option>
                <option value="3">Hincha Fiel</option>
                <option value="4">Adulto Mayor</option>
        </Form.Select>
        </Form.Group>
        <Form.Group controlId="tipoLocalidad">
          <Form.Label>Tipo de localidad</Form.Label>
          <Form.Select value={tipoLocalidad} onChange={(e) => setTipoLocalidad(e.target.value)} >
            <option value="1">Norte</option>
            <option value="2">Sur</option>
            <option value="3">Occidental</option>
            <option value="4">Oriental</option>
        </Form.Select>
        </Form.Group>
        <Form.Group controlId="numeroAsiento">
          <Form.Label>Número de asiento</Form.Label>
          <Form.Control type="number" value={numeroAsiento} onChange={(e) => setNumeroAsiento(e.target.value)} />
        </Form.Group>
        </Form>
    </div>
  );
};

export default AbonoForm;*/
/*import { useState } from "react";
import styles from "./comprarabono.css";

function CompraAbono() {
  const [formData, setFormData] = useState({
    tipoDocumento: "cedula",
    numeroDocumento: "",
    celular: "",
    correo: "",
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    direccion: "",
    contrasena: "",
    descuento: "",
    tipoAbonado: "adultoMayor",
    tipoLocalidad: "norte",
    numeroAsiento: "",
    tipoPago: "tarjetaCredito",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCompraAbono = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones de compra de abono con los datos de formData
    console.log("Datos de compra:", formData);
  };

  return (
    <div className={styles.compraAbonoContainer}>
      <h2>Compra de Abono</h2>
      <form onSubmit={handleCompraAbono}>
        <div className={styles.formGroup}>
          <label htmlFor="tipoDocumento">Tipo de Documento:</label>
          <select
            id="tipoDocumento"
            name="tipoDocumento"
            value={formData.tipoDocumento}
            onChange={handleInputChange}
          >
            <option value="cedula">Cédula</option>
            <option value="tarjetaIdentidad">Tarjeta de Identidad</option>
            <option value="registroCivil">Registro Civil</option>
            <option value="nit">NIT</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="cedulaExtranjeria">Cédula de Extranjería</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="numeroDocumento">Número de Documento:</label>
          <input
            type="text"
            id="numeroDocumento"
            name="numeroDocumento"
            value={formData.numeroDocumento}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="celular">Celular:</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="descuento">Descuento:</label>
          <input
            type="text"
            id="descuento"
            name="descuento"
            value={formData.descuento}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tipoAbonado">Tipo de Abonado:</label>
          <select
            id="tipoAbonado"
            name="tipoAbonado"
            value={formData.tipoAbonado}
            onChange={handleInputChange}
          >
            <option value="adultoMayor">Adulto Mayor</option>
            <option value="hinchaFiel">Hincha Fiel</option>
            <option value="estudiante">Estudiante</option>
            <option value="normal">Normal</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tipoLocalidad">Tipo de Localidad:</label>
          <select
            id="tipoLocalidad"
            name="tipoLocalidad"
            value={formData.tipoLocalidad}
            onChange={handleInputChange}
          >
            <option value="norte">Norte</option>
            <option value="sur">Sur</option>
            <option value="occidental">Occidental</option>
            <option value="oriental">Oriental</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="numeroAsiento">Número de Asiento:</label>
          <input
            type="number"
            id="numeroAsiento"
            name="numeroAsiento"
            value={formData.numeroAsiento}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tipoPago">Tipo de Pago:</label>
          <select
            id="tipoPago"
            name="tipoPago"
            value={formData.tipoPago}
            onChange={handleInputChange}
          >
            <option value="tarjetaCredito">Tarjeta de Crédito</option>
            <option value="pagoVirtualPSE">Pago Virtual PSE</option>
            <option value="efectivo">Efectivo</option>
          </select>
        </div>
        <button type="submit">Comprar Abono</button>
      </form>
    </div>
  );
}

export default CompraAbono;


import { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "./comprarabono.css";

CompraAbono.useClient = true;

const AbonoForm = () => {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [celular, setCelular] = useState("");
  const [correo, setCorreo] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [descuento, setDescuento] = useState(0);
  const [tipoAbondado, setTipoAbondado] = useState("");
  const [tipoLocalidad, setTipoLocalidad] = useState("");
  const [numeroAsiento, setNumeroAsiento] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulación de carga
    // Elimina estas líneas y reemplázalas por la lógica de conexión a la base de datos
    // Loading y manejo de errores se deben adaptar a tu implementación real
    setLoading(true);
    try {
      // Lógica de conexión a la base de datos aquí
      // Luego de realizar la operación, puedes redirigir o mostrar un mensaje de éxito
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Compra de abono</h1>
      <Form onSubmit={handleSubmit}>
        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
};

export default AbonoForm;*/


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

