import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './WidgetWrapper.css';
import WidgetHeader from './widgetHeader/WidgetHeader';

const WidgetWrapper = props => (
  <Row className="unit-container">
    <WidgetHeader options={props.headerOptions} />
  </Row>
);

WidgetWrapper.propTypes = {
  headerOptions: PropTypes.shape({
    title: PropTypes.string,
  }),
};

WidgetWrapper.defaultProps = {
  headerOptions: {
    title: 'widget',
  },
};

export default WidgetWrapper;
