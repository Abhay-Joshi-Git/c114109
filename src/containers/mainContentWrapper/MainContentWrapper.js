import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import Dashboard from 'containers/dashboard/Dashboard.js';
import customerAccounts from 'containers/customer/accounts/CustomerAccounts';
import SalesLeads from 'containers/sales/leads/SalesLeads';
import './MainContentWrapper.scss';

const MainContentWrapper = () => (
  <Grid fluid className="full-height">
    <Route path="/" exact component={Dashboard} />
    <Route path="/accounts" exact component={customerAccounts} />
    <Route path="/leads" exact component={SalesLeads} />
  </Grid>
);

export default MainContentWrapper;
