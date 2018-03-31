import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PageHeader from 'components/pageHeader/PageHeader';

const GridPage = props => (
  <Grid fluid>
    <Row>
      <PageHeader {...props.headerOptions} />
    </Row>
  </Grid>
);

GridPage.propTypes = {
  headerOptions: PropTypes.shape({
    filterDropdown: PropTypes.object,
    pageCaption: PropTypes.string.isRequired,
  }).isRequired,
};

export default GridPage;
