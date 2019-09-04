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

    }
    
    render() { 
        const { contacts } = this.state;
        return (
            <React.Fragment>
                <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id} 
                        contact={contact}
                        deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                    />
                ))}
            </React.Fragment>
        )
    }
}
 
export default Contacts;