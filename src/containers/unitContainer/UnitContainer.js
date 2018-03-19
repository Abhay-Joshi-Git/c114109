import React from 'react';
import { Row } from 'react-bootstrap';

import './UnitContainer.css';
import UnitHeader from './unitHeader/UnitHeader';

const UnitContainer = () => (
  <Row className="unit-container">
    <UnitHeader />
  </Row>
);

export default UnitContainer;
