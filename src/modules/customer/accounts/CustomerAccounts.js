import React from 'react';
import GridPage from 'shared/gridPage/GridPage';

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
    <>
      <GridPage {...PageOptions} />
    </>
  );
};


export default CustomerAccounts;
