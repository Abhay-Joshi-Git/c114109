import React, { Fragment } from 'react';
// import { Row, Col } from 'react-bootstrap';
import GridPage from 'components/gridPage/GridPage';

const CustomerAccounts = () => {
  const PageOptions = {
    headerOptions: {
      filterDropdown: {
        caption: 'Accounts Filter',
        filterOptions: ['All Accounts', 'Duplicated Accounts'],
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
