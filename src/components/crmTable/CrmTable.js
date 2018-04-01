import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import './CrmTable.css';

const CrmTable = (props) => {
  const columnProps = props.columns.map(col => ({
    headerClassName: 'crm-header-cell',
    ...col,
  }));

  return (
    <ReactTable
      data={props.data}
      columns={columnProps}
      defaultPageSize={props.pageSize}
      className="-highlight table-content"
    />
  );
};


CrmTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number,
};

CrmTable.defaultProps = {
  pageSize: 25,
};

export default CrmTable;
