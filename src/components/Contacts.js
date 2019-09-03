import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Rejohn',
                email: 'rejohn@gmail.com',
                phone: '01717546533'
            },
            {
                id: 2,
                name: 'Atik',
                email: 'atik@gmail.com',
                phone: '01552607608'
            },
            {
                id: 3,
                name: 'Rajon',
                email: 'rajon@gmail.com',
                phone: '01741063214'
            }
        ]
    };

    deleteContact = (id) => {
        const { contacts } = this.state;
        
        const newContacts = contacts.filter(contact => contact.id !== id);
        this.setState({ contacts: newContacts })
    }
    
    render() { 
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id} 
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                    />
                ))}
            </React.Fragment>
        );
    }
}
 
export default Contacts;