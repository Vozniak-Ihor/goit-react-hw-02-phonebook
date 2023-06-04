import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import LoginForm from './LogForm/LoginForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContact = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toUpperCase().includes(this.state.filter.toUpperCase())
    );
  };

  handleSubmit = (values, actions) => {
    const contactId = nanoid();
    if (this.state.contacts.some(item => item.name === values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: contactId,
          name: values.name,
          number: values.phoneNumber.toString(),
        },
      ],
    }));
    actions.resetForm();
  };
  onDeleteContact = trueId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== trueId),
    }));
  };
  render() {
    return (
      <>
        <LoginForm
          onSubmit={this.handleSubmit}
          contacts={this.state.contacts}
        />
        <Filter onInputChange={this.handleInputChange} />
        <ContactsList
          filter={this.filteredContact}
          onDeleteContact={this.onDeleteContact}
        />
      </>
    );
  }
}
