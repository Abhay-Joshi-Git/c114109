import React from 'react';
import {
  Row, Col, Dropdown, MenuItem, Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import find from 'lodash/find';

import PageBreadCrumbs from 'shared/pageBreadCrumbs/PageBreadCrumbs';
import './PageHeader.scss';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDataFilterOption: this.getInitialDataFilterOption(props),
    };
  }

  onDataFilterSelect = (item) => {
    this.setState({
      selectedDataFilterOption: item.id,
    });
  }

  getInitialDataFilterOption(props) {
    if (props.filterDropdown.defaultSelectedOption) {
      return props.filterDropdown.defaultSelectedOption;
    }
    if (props.filterDropdown.filterOptions && props.filterDropdown.filterOptions.length) {
      return props.filterDropdown.filterOptions[0].id;
    }
    return null;
  }

  getDataFilterNameById(filterId) {
    const selectedFilter = find(
      this.props.filterDropdown.filterOptions,
      (item) => item.id === filterId,
    );
    return selectedFilter ? selectedFilter.name : '';
  }

  getDataFilterDropDown = (pageDataFilterOptions) => (
    <>
      {
        (pageDataFilterOptions)
          ? (
            <Dropdown id="page-data-filter" className="page-filter-dropdown">
              <Dropdown.Toggle>
                <h4 className="dis-i-b">
                  {this.getDataFilterNameById(this.state.selectedDataFilterOption)}
                </h4>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {
                pageDataFilterOptions.filterOptions.map((item) => (
                  <MenuItem
                    key={item.id}
                    onSelect={() => this.onDataFilterSelect(item)}
                  >
                    {item.name}
                  </MenuItem>
                ))
              }
              </Dropdown.Menu>
            </Dropdown>
          ) : null
      }
    </>
  );

  getPageOptionsDropDown = () => (
    <>
      <Dropdown id="page-options" className="page-filter-dropdown options-filter pl-3">
        <Dropdown.Toggle>
          <a href="/options" className="dis-i-b">Options</a>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem key="saveAs">Save As</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );

  render() {
    return (
      <>
        <PageBreadCrumbs {...this.props} />
        <Row className="page-header-options-container">
          <Col sm={4}>
            {this.getDataFilterDropDown(this.props.filterDropdown)}
            {this.getPageOptionsDropDown()}
          </Col>
          <Col sm={4} smOffset={4} className="pt-2 buttons-container">
            <div className="pull-right">
              <Button className="bg-secondary">
                <i className="fa fa-upload pr-3" />
                  Export
              </Button>
              <Button className="bg-secondary">
                <i className="fa fa-download pr-3" />
                  Import File
              </Button>
              <Button bsStyle="primary">
                Create Account
              </Button>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

PageHeader.propTypes = {
  filterDropdown: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    filterOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
    defaultSelectedOption: PropTypes.string,
  }),
  pageCaption: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  filterDropdown: null,
};

export default PageHeader;
