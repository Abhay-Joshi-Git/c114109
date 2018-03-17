import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App full-height">
        <Header></Header>
        <Grid className="wrapper full-height" fluid>
          <Row className="full-height">
            <Col md={1} className="full-height" style={{ paddingLeft: '0px' }}>
              <NavBar></NavBar>
            </Col>
            <Col md={10}>
              <h1 className="App-title">CRM</h1>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
