import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import HeaderOld from 'containers/header/HeaderOld';
import Header from 'containers/header/Header';
import NavBar from 'containers/navBar/NavBar';
import MainContentWrapper from 'containers/mainContentWrapper/MainContentWrapper';

import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App full-height">
      <Header />
      <HeaderOld />
      <Grid className="wrapper full-height" fluid>
        <Row className="full-height">
          <Col sm={1} className="full-height left-nav-bar-container">
            <NavBar />
          </Col>
          <Col sm={11} className="main-content">
            <MainContentWrapper />
          </Col>
        </Row>
      </Grid>
    </div>
  </BrowserRouter>
);

export default App;
