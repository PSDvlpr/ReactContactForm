import React, { Component } from 'react';
import style from '../css/style.css';


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [{
        firstName: '',
        lastName: '',
        email: ''
      }]
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.add(this.state.contacts);
    this.setState({
      contacts: [{
        firstName: '',
        lastName: '',
        email: ''
      }]
    });
  }

  onFirstNameChange(e) {
    e.preventDefault();
    this.setState({
      firstName: e.target.value
    });
  }

  onNameChange(e) {
    e.preventDefault();
    this.setState({
      lastName: e.target.value
    });
  }

  onEmailChange(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }



  render() {
    return(
      <form onSubmit={this.handleSubmit} className={style.contactForm}>
        <input type='text'
               placeholder='Imię'
               value={this.contact.firstName}
               onFirstNameChange={this.updateFirstName}></input>
        <input type='text'
               placeholder='Nazwisko'
               value={this.contact.lastName}
               onNameChange={this.updateName}></input>
        <input type={'email'}
               placeholder='Email'
               value={this.contact.email}
               onEmailChange={this.updteMail}></input>
        <button type='submit'>Dodaj kontakt</button>
      </form>
    );
  }
}

export default ContactForm;
