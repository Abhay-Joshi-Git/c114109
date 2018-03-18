import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import './MainContainer.css';
import UnitContainer from '../unitContainer/UnitContainer';

const MainContainer = () => (
  <Fragment>
    <Row>
      <Col md={6} className="unit-column">
        <UnitContainer />
      </Col>
      <Col md={6} className="unit-column">
        <UnitContainer />
      </Col>
    </Row>
    <Row>
      <Col md={6} className="unit-column">
        <UnitContainer />
      </Col>
      <Col md={6} className="unit-column">
        <UnitContainer />
      </Col>
    </Row>
  </Fragment>
);

export default MainContainer;
