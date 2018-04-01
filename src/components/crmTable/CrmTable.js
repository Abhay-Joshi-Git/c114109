import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import './CrmTable.css';

const CrmTable = props => (
  <ReactTable
    data={props.data}
    columns={props.columns}
    defaultPageSize={props.pageSize}
    className="-highlight table-content"
  />
);

CrmTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number,
};

CrmTable.defaultProps = {
  pageSize: 25,
};

export default CrmTable;
