import React, { Fragment } from 'react';
// import { Row, Col } from 'react-bootstrap';
import GridPage from 'components/gridPage/GridPage';

const dataFilterOptions = [
  {
    id: 'all',
    name: 'All Accounts',
  },
  {
    id: 'duplicated',
    name: 'Duplicated Accounts',
  },
];

const CustomerAccounts = () => {
  const PageOptions = {
    headerOptions: {
      filterDropdown: {
        caption: 'Accounts Filter',
        filterOptions: dataFilterOptions,
      },
      pageCaption: 'Customer / Accounts',
    },
  };

  return (
    <Fragment>
      <GridPage {...PageOptions} />
    </Fragment>
  );
};


export default CustomerAccounts;
