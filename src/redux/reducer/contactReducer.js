import { GET_CONTACTS } from '../actions/types'

const initialState = {
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

export default function(state = initialState, action){
    switch(action.type) {
        case GET_CONTACTS:
            return {
                ...state
            }
        default: 
            return state;
    }
}