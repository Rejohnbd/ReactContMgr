import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default: 
            return state;
    }
}

export class Provider extends Component{
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
        ],
        dispatch: (action) => {
            this.setState( state => reducer(state, action) )
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;