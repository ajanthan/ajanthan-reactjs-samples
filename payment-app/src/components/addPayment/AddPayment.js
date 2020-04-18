import React, { useState } from 'react';
import './AddPayment.css';

function AddPayment() {
  const [payment, setPayment] = useState({id:'', amount:'', description:''})
  const createPayment = (e) => {
    console.log(payment);
    e.preventDefault();
    const requestOption = {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      mode:'cors',
      body: JSON.stringify(payment)
    };
    fetch('http://localhost:8080/service/payments/', requestOption);
    console.log(requestOption);
  }
  const updateId = (e) => {
    setPayment({
      id: e.target.value,
      amount: payment.amount,
      description: payment.description
    })
  }
  const updateAmount = (e) => {
    setPayment({
      amount: e.target.value,
      description: payment.description,
      id: payment.id
    })
  }
  const updateDesc = (e) => {
    setPayment({
      description: e.target.value,
      amount: payment.amount,
      id: payment.id
    })
  }

  return (
    <div className="form-container">
      <form className="payment-form" onSubmit={createPayment}>
        <h1>Add a new payment</h1>
        <div className="label-group">
          <label>Id:</label>
          <input type="text" value={payment.id} onChange={updateId}></input>
        </div>
        <div className="label-group">
          <label>Amount:</label>
          <input type="text" value={payment.amount} onChange={updateAmount}></input>
        </div>
        <div className="label-group">
          <label>Description:</label>
          <input type="text" value={payment.description} onChange={updateDesc}></input>
        </div>
        <input type="submit" value="Pay"></input>
      </form>
    </div>
  );
}

export default AddPayment;
