import axios from 'axios'
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT } from './types';

export const getContacts = () => async (dispacth) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispacth({
        type: GET_CONTACTS,
        payload: res.data
    });
}

export const getContact = (id) => async (dispacth) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispacth({
        type: GET_CONTACT,
        payload: res.data
    });
}

export const deleteContact = (id) => async (dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    })
}

export const addContact = (contact) => async (dispacth) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
    dispacth({
        type: ADD_CONTACT,
        payload: res.data
    })
}

export const updateContact = (contact) => async (dispacth) => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact);
    dispacth({
        type: UPDATE_CONTACT,
        payload: res.data
    })
}