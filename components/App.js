const App = React.createClass({
    getInitialState() {
        return {
            contacts: [
                {
                    id: 1,
                    firstName: 'Jan',
                    lastName: 'Nowak',
                    email: 'jan.nowak@example.com',
                },
                {
                    id: 2,
                    firstName: 'Adam',
                    lastName: 'Kowalski',
                    email: 'adam.kowalski@example.com',
                },
                {
                    id: 3,
                    firstName: 'Zbigniew',
                    lastName: 'Koziol',
                    email: 'zbigniew.koziol@example.com',
                }]
            };
        },

    addContact(val) {
        const contact = {
            id: this.state.contacts.length + 1,
            firstName: val.firstName,
            lastName: val.lastName,
            email: val.email
        };

        const contacts = [...this.state.contacts, contact];
        this.setState({contacts});
    },

    render() {
        return(
            <div className='app'>
                <ContactForm add={this.addContact} />
                <Contacts items={this.state.contacts} />
            </div>
        );
    }
});
