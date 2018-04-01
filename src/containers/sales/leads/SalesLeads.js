import React, { Component } from 'react';
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

const leadsColumns = [
  {
    Header: 'Contact Name',
    accessor: 'contactName',
  },
  {
    Header: 'Contact Email',
    accessor: 'contactEmail',
  },
  {
    Header: 'Contact Phone',
    accessor: 'mobileNumber',
  },
  {
    Header: 'Created At',
    accessor: 'dateCreated',
  },
  {
    Header: 'Updated At',
    accessor: 'dateModified',
  },
];

class SalesLeads extends Component {
  componentDidMount() {
    this.props.fetchLeads();
  }

  render() {
    return (
      <div className="full-height">
        <GridPage {...PageOptions} data={this.props.leads} columns={leadsColumns} />
      </div>
    );
  }
}

SalesLeads.propTypes = {
  fetchLeads: PropTypes.func.isRequired,
  leads: PropTypes.arrayOf(PropTypes.object),
};

SalesLeads.defaultProps = {
  leads: [],
};

const mapStateToProps = (state) => {
  const leadsData = Object.values(state.sales.leads);

  return {
    leads: leadsData && leadsData.length ?
      leadsData.map(item => ({
        contactName: `${item.first_name} ${item.last_name}`,
        contactEmail: item.email_address,
        mobileNumber: item.mobile_no,
        dateCreated: item.date_created,
        dateModified: item.date_modified,
      })) : [],
  };
};

export default connect(mapStateToProps, { ...actions })(SalesLeads);
