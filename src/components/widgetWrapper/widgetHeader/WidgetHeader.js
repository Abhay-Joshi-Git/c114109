import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './WidgetHeader.css';

const WidgetHeader = props => (
  <Row className="widget-header">
    <div className="title">{props.options.title} <i className="fa fa-angle-down" /></div>
    <div className="task-icons">
      <span className="circle">
        <i className="fa fa-pencil" />
      </span>
      <span className="circle">
        <i className="fa fa-refresh" />
      </span>
      <span className="circle">
        <i className="fa fa-cog" />
      </span>
      <span className="circle">
        <i className="fa fa-times" />
      </span>
    </div>
  </Row>
);

WidgetHeader.propTypes = {
  options: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};


export default WidgetHeader;
