import React from 'react';
import { Row, Col } from 'react-bootstrap';

import RecentEmails from 'modules/recentEmails/RecentEmails';
import WidgetWrapper from 'shared/widgetWrapper/WidgetWrapper';

const Dashboard = () => (
  <>
    <Row>
      <Col md={6} className="unit-column">
        <RecentEmails />
      </Col>
      <Col md={6} className="unit-column">
        <WidgetWrapper />
      </Col>
    </Row>
    <Row>
      <Col md={6} className="unit-column">
        <WidgetWrapper />
      </Col>
      <Col md={6} className="unit-column">
        <WidgetWrapper />
      </Col>
    </Row>
  </>
);

export default Dashboard;
