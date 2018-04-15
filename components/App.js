import React, { Component } from 'react';
import styles from '../css/style.css';
import ContactForm from './ContactForm';
import Contacts from './Contacts';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [{
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
        }

    addContact(val) {
        const contact = {
            id: this.state.contacts.length + 1,
            firstName: val.contacts.firstName,
            lastName: val.contacts.lastName,
            email: val.contacts.email
        };

        const contacts = [...this.state.contacts, contact];
        this.setState({contacts});
    }

    render() {
        return(
            <div className='app'>
                <ContactForm add={this.addContact} />
                <Contacts items={contacts} />
            </div>
        );
    }
}
