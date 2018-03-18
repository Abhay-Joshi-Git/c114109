import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import MainContainer from './components/mainContainer/MainContainer';

const App = () => (
  <div className="App full-height">
    <Header />
    <Grid className="wrapper full-height" fluid>
      <Row className="full-height">
        <Col md={1} className="full-height left-nav-bar-container">
          <NavBar />
        </Col>
        <Col md={11}>
          <MainContainer />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default App;
