import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    return (
      <>
        <form>
          <h2 htmlFor="findContacts">Find contacts by name</h2>
          <input
            type="text"
            id="findContacts"
            onChange={this.props.onInputChange}
          />
        </form>
      </>
    );
  }
}

export default Filter;

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
