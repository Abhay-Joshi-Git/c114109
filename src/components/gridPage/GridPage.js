import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PageHeader from 'components/pageHeader/PageHeader';
import CrmTable from 'components/crmTable/CrmTable';

import './GridPage.scss';

const GridPage = props => (
  <Grid fluid className="full-height">
    <Row>
      <PageHeader {...props.headerOptions} />
    </Row>
    <Row className="grid-container">
      {
        props.data && props.data.length ?
          <CrmTable data={props.data} columns={props.columns} /> :
          <h4>No Data</h4>
      }
    </Row>
  </Grid>
);

GridPage.propTypes = {
  headerOptions: PropTypes.shape({
    filterDropdown: PropTypes.object,
    pageCaption: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
};

GridPage.defaultProps = {
  data: [],
  columns: [],
};

export default GridPage;
