import React, { useState,useEffect } from 'react';
import './ListPayments.css';

const ListPayments = () => {
    const [payments,setPayments] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8080/service/payments')
        .then(response => response.json())
        .then(data =>setPayments(data) )
    },[]);
    return (
        <div className="histoty-container">
            <h1>History</h1>
            {payments.map((payment) => 
                <div className="row" key={payment.id} >
                    <div className="item">
                        {payment.id}
                </div>
                    <div className="item">
                        {payment.amount}
                </div>
                    <div className="item">
                        {payment.description}
                </div>
                </div>
            )}
        </div>);
}

export default ListPayments;