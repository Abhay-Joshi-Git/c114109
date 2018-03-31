import React, { Fragment } from 'react';
import GridPage from 'components/gridPage/GridPage';

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

const SalesLeads = () => {
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

  return (
    <Fragment>
      <GridPage {...PageOptions} />
    </Fragment>
  );
};


export default SalesLeads;
