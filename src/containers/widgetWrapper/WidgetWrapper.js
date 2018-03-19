import React from 'react';
import { Row } from 'react-bootstrap';

import './WidgetWrapper.css';
import WidgetHeader from './widgetHeader/WidgetHeader';

const WidgetWrapper = () => (
  <Row className="unit-container">
    <WidgetHeader />
  </Row>
);

export default WidgetWrapper;
