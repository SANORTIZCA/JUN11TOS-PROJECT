import React from 'react';
import Head from 'next/head';
import "./validarpago.css"

const Payment = () => {

  return (
    <div className="container">
      <Head>
        <title>Pago en línea</title>
      </Head>
      <h1>Pago en línea</h1>
      <form>
        <div className="form-group">
          <label htmlFor="cardNumber">Número de tarjeta de crédito</label>
          <input
            type="text"
            id="cardNumber"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Fecha de vencimiento</label>
          <input
            type="text"
            id="expiryDate"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Pagar
        </button>
      </form>
    </div>
  );
};

export default Payment;
