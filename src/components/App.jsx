import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import LoginForm  from './LogForm/LoginForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleSubmit = (values, actions) => {
    const contactId = nanoid();
    if (this.state.contacts.some(item => item.name === values.name)) {
      alert(`${values.name} is already in contacts`);
      return
    }  
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { 
        id: contactId, 
        name: values.name, 
        number: values.phoneNumber.toString()
      }]
    }));
    console.log(this.state.contacts);
    actions.resetForm()
  }
  // handleSubmit = (values, actions) =>
  // {
  //       const contactId = nanoid()
  //         if (this.state.contacts.some(item => item.name === values.name))
  //           {
  //           alert(`${values.name} is already in contacts`)
  //           return
  //           }  
  //     this.setState((prevState) =>
  //     (
  //       {
  //         contacts: [...prevState.contacts,
  //         { id: contactId , name: values.name, number: values.number.toString()}]
  //       }
  //       )
  //       )
  //       console.log(this.state.contacts);
  //       actions.resetForm()
  // }
  
  render() {
    return (
      <>
        <LoginForm onSubmit={this.handleSubmit} contacts={ this.state.contacts}/>
      </>
    );
  }
}
