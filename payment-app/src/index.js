import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddPayment from './components/addPayment/AddPayment';
import ListPayments from './components/ListPayments/ListPayments'


ReactDOM.render(
  <React.StrictMode>
    <AddPayment />
    <ListPayments/>
  </React.StrictMode>,
  document.getElementById('root')
);
