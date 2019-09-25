import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';

import Header from 'containers/header/Header';
import NavBar from 'containers/navBar/NavBar';
import MainContentWrapper from 'containers/mainContentWrapper/MainContentWrapper';

import store from './store';

import './App.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App full-height">
        <Header />
        <Grid className="wrapper full-height" fluid>
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
