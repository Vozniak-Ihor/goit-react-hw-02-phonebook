import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactsList from "../ContactsList/ContactsList"

class Filter extends Component {
  state = {
    inputValue: '',
  };
  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  render() {
    const { contacts } = this.props;
    const filteredContact = contacts.filter(country => {
      return country.name.toLowerCase().includes(this.state.inputValue.toLowerCase());
    });
    console.log(filteredContact);
    return (<>
      <form>
        <h2 htmlFor="findContacts">Find contacts by name</h2>
        <input
          type="text"
          id="findContacts"
          onChange={this.handleInputChange}
        />
      </form>
      <ContactsList contacts={filteredContact}/>
      </>
    )
  }
}

export default Filter;

// Filter.propTypes = {
//   onChangeFilter: PropTypes.func.isRequired,
// };
