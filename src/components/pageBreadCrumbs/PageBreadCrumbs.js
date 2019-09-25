import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './PageBreadCrumbs.scss';

const PageBreadCrumbs = props => (
  <Row className="page-breadcrumb-container">
    <Col sm={2}>
      {props.pageCaption}
    </Col>
    <Col sm={2} smOffset={8}>
      <i className="fa fa-star" />
      <i className="fa fa-thumbtack" />
    </Col>
  </Row>
);

PageBreadCrumbs.propTypes = {
  pageCaption: PropTypes.string.isRequired,
};

export default PageBreadCrumbs;
