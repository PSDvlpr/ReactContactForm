const ContactForm = React.createClass({
  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    };
  },

  handleSubmit(e) {
    e.preventDefault();

    this.props.add(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
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
        <input type={'text'}
               placeholder={'Imię'}
               value={this.state.firstName}
               onChange={this.onFirstNameChange}></input>
        <input type={'text'}
               placeholder={'Nazwisko'}
               value={this.state.lastName}
               onChange={this.onNameChange}></input>
        <input type={'email'}
               placeholder={'Email'}
               value={this.state.email}
               onChange={this.onEmailChange}></input>
        <button type={'submit'}>Dodaj kontakt</button>
      </form>
    );
  }
});
