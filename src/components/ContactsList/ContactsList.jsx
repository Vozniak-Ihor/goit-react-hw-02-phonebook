import React, { Component } from 'react';
class ContactsList extends Component {
  render() {
    return this.props.contacts.map(({ id, name, number }) => {
      return (<ul key={id}>
          <li >
            <p>{name}:   {number}</p>
          </li>
        </ul>
      );
    });
  }
}

export default ContactsList;
