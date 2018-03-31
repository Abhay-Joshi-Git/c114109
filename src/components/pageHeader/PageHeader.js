import React, { Fragment } from 'react';
import { Row, Col, Dropdown, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import find from 'lodash/find';

import PageBreadCrumbs from 'components/pageBreadCrumbs/PageBreadCrumbs';
import './PageHeader.css';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDataFilterOption: this.getInitialiDataFilterOption(props),
    };
  }

  onDataFilterSelect = (item) => {
    this.setState({
      selectedDataFilterOption: item.id,
    });
  }

  getInitialiDataFilterOption(props) {
    if (props.filterDropdown.defaultSeclectedOption) {
      return props.filterDropdown.defaultSeclectedOption;
    }
    if (props.filterDropdown.filterOptions && props.filterDropdown.filterOptions.length) {
      return props.filterDropdown.filterOptions[0].id;
    }
    return null;
  }

  getDataFilterNameById(filterId) {
    const selectedFilter = find(
      this.props.filterDropdown.filterOptions,
      item => item.id === filterId,
    );
    return selectedFilter ? selectedFilter.name : '';
  }

  getDataFilterDropDown = pageDataFilterOptions => (
    <Fragment>
      {
        (pageDataFilterOptions) ?
          <Dropdown id="page-data-filter" className="page-filter-dropdown">
            <Dropdown.Toggle>
              <h4 className="dis-i-b">
                {this.getDataFilterNameById(this.state.selectedDataFilterOption)}
              </h4>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                pageDataFilterOptions.filterOptions.map(item => (
                  <MenuItem
                    key={item.id}
                    onSelect={() => this.onDataFilterSelect(item)}
                  >
                    {item.name}
                  </MenuItem>
                ))
              }
            </Dropdown.Menu>
          </Dropdown> : null
      }
    </Fragment>
  );

  getPageOptionsDropDown = () => (
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

  render() {
    return (
      <Fragment>
        <PageBreadCrumbs {...this.props} />
        <Row className="page-header-options-container">
          <Col sm={4}>
            {this.getDataFilterDropDown(this.props.filterDropdown)}
            {this.getPageOptionsDropDown()}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

PageHeader.propTypes = {
  filterDropdown: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    filterOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
    defaultSeclectedOption: PropTypes.string,
  }),
  pageCaption: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  filterDropdown: null,
};

export default PageHeader;
