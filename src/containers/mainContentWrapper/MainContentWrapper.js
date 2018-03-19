import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import Dashboard from 'containers/dashboard/Dashboard.js';
import customerAccounts from 'containers/customer/accounts/CustomerAccounts';
import './MainContentWrapper.css';

const MainContentWrapper = () => (
  <Grid fluid>
    <Route path="/" exact component={Dashboard} />
    <Route path="/accounts" exact component={customerAccounts} />
  </Grid>
);

export default MainContentWrapper;
