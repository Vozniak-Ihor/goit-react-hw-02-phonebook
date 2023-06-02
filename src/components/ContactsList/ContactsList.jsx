import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ContactsList extends Component {
  render() {
    return this.props.filter().map(({ id, name, number }) => {
      return (
        <ul key={id}>
          <li>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => {
                this.props.onDeleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      );
    });
  }
}

export default ContactsList;



ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number:PropTypes.string.isRequired
                })
    ),
    onDeleteContact: PropTypes.func.isRequired
}