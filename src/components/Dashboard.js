import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>CRM Dashboard</h1>
            <div className="metrics">
                <div className="metric">
                    <h2>Total Customers</h2>
                    <p>150</p>
                </div>
                <div className="metric">
                    <h2>Active Customers</h2>
                    <p>120</p>
                </div>
                <div className="metric">
                    <h2>New Customers This Month</h2>
                    <p>30</p>
                </div>
                <div className="metric">
                    <h2>Total Revenue</h2>
                    <p>$50,000</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;