import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

import RecentEmails from 'containers/functionalModules/recentEmails/RecentEmails';
import UnitContainer from 'containers/unitContainer/UnitContainer';
import './MainContainer.css';

const MainContainer = () => (
  <Fragment>
    <Row>
      <Col md={6} className="unit-column">
        <RecentEmails />
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
