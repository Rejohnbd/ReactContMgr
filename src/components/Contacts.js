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
    }
    
    render() { 
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id} 
                        contact={contact}
                    />
                ))}
            </React.Fragment>
        );
    }
}
 
export default Contacts;