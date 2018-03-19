import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import RecentEmails from 'features/recentEmails/RecentEmails';
import WidgetWrapper from 'components/widgetWrapper/WidgetWrapper';
import './MainContentWrapper.css';

const MainContentWrapper = () => (
  <Grid fluid>
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
  </Grid>
);

export default MainContentWrapper;
