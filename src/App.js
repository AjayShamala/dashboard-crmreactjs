import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import './styles/App.css';

function App() {
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <Dashboard />
                    </Route>
                    <Route path="/customers" exact>
                        <CustomerList setSelectedCustomer={setSelectedCustomer} />
                    </Route>
                    <Route path="/customers/:id">
                        <CustomerDetails customer={selectedCustomer} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;