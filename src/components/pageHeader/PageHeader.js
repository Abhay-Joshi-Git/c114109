import React, { Fragment } from 'react';
import { Row, Col, Dropdown, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PageBreadCrumbs from 'components/pageBreadCrumbs/PageBreadCrumbs';
import './PageHeader.css';

const PageHeader = (props) => {
  const GetDataFilterDropDown = pageDataFilterOptions => (
    <Fragment>
      {
        (pageDataFilterOptions) ?
          <Dropdown id="page-data-filter" className="page-filter-dropdown">
            <Dropdown.Toggle>
              <h4 className="dis-i-b">{pageDataFilterOptions.caption}</h4>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                pageDataFilterOptions.filterOptions.map((item, index) => (
                  <MenuItem key={item} active={index === 0}>{item}</MenuItem>
                ))
              }
            </Dropdown.Menu>
          </Dropdown> : null
      }
    </Fragment>
  );

  const GetPageOptionsDropDown = () => (
    <Fragment>
      <Dropdown id="page-options" className="page-filter-dropdown options-filter pl-3">
        <Dropdown.Toggle>
          <a className="dis-i-b">Options</a>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem key="saveAs">Save As</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );

  return (
    <Fragment>
      <PageBreadCrumbs {...props} />
      <Row className="page-header-options-container">
        <Col sm={4}>
          {GetDataFilterDropDown(props.filterDropdown)}
          {GetPageOptionsDropDown()}
        </Col>
      </Row>
    </Fragment>
  );
};

PageHeader.propTypes = {
  filterDropdown: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  pageCaption: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  filterDropdown: null,
};

export default PageHeader;
