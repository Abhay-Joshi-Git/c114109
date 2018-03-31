import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import GridPage from 'components/gridPage/GridPage';
import actions from '../_store/actions';

const dataFilterOptions = [
  {
    id: 'all',
    name: 'All Leads',
  },
  {
    id: 'open',
    name: 'Open Leads',
  },
];

const PageOptions = {
  headerOptions: {
    filterDropdown: {
      caption: 'Leads Filter',
      filterOptions: dataFilterOptions,
      selectedDataFilterOption: 'open',
    },
    pageCaption: 'Sales / Leads',
  },
};

class SalesLeads extends Component {
  componentDidMount() {
    this.props.fetchLeads();
  }

  render() {
    return (
      <Fragment>
        <GridPage {...PageOptions} />
      </Fragment>
    );
  }
}

SalesLeads.propTypes = {
  fetchLeads: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  leads: state.sales.leads,
});

export default connect(mapStateToProps, { ...actions })(SalesLeads);
