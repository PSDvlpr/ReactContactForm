const ContactForm = React.createClass({
  getInitialState() {
    return {
      contacts: [{
        firstName: '',
        lastName: '',
        email: ''
      }]
    };
  },

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
  },

  onFirstNameChange(e) {
    e.preventDefault();
    this.setState({
      firstName: e.target.value
    });
  },

  onNameChange(e) {
    e.preventDefault();
    this.setState({
      lastName: e.target.value
    });
  },

  onEmailChange(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  },

  render() {
    return(
      <form onSubmit={this.handleSubmit} className={'contactForm'}>
        <input type='text'
               placeholder='Imię'
               value={this.state.contacts.firstName}
               onFirstNameChange={this.updateFirstName}></input>
        <input type='text'
               placeholder='Nazwisko'
               value={this.state.contacts.lastName}
               onNameChange={this.updateName}></input>
        <input type={'email'}
               placeholder='Email'
               value={this.state.contacts.email}
               onEmailChange={this.updateMail}></input>
        <button type='submit'>Dodaj kontakt</button>
      </form>
    );
  }
});
