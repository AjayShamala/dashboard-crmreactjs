import React from 'react';

const CustomerDetails = ({ customer }) => {
    if (!customer) {
        return <div>Select a customer to see the details.</div>;
    }

    return (
        <div>
            <h2>Customer Details</h2>
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone:</strong> {customer.phone}</p>
            <h3>Transaction History</h3>
            <ul>
                {customer.transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.date}: {transaction.amount} - {transaction.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerDetails;