import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';

import Header from 'modules/header/Header';
import NavBar from 'modules/navBar/NavBar';
import MainContentWrapper from 'modules/mainContentWrapper/MainContentWrapper';

import store from './store';

import './App.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app full-height">
        <Header />
        <Grid className="wrapper full-width" fluid>
          <Row className="full-height">
            <Col sm={1} className="full-height left-nav-bar-container">
              <NavBar />
            </Col>
            <Col sm={11} className="main-content full-height">
              <MainContentWrapper />
            </Col>
          </Row>
        </Grid>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
