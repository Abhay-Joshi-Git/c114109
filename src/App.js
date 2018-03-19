import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from 'components/header/Header';
import NavBar from 'components/navBar/NavBar';
import MainContentWrapper from 'components/mainContentWrapper/MainContentWrapper';

import './App.css';

const App = () => (
  <div className="App full-height">
    <Header />
    <Grid className="wrapper full-height" fluid>
      <Row className="full-height">
        <Col md={1} className="full-height left-nav-bar-container">
          <NavBar />
        </Col>
        <Col md={11} className="main-content">
          <MainContentWrapper />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default App;
