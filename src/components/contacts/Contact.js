import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Consumer } from '../../context';
import { async } from 'q';

class Contact extends React.Component {

    state = {
        showContactInfo: false
    }

    onShowClick = () => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    }

    onDeleteClick = async (id, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'DELETE_CONTACT', payload: id })

    }
    
    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3"> 
                            <h4>{name} 
                                <i 
                                    onClick={this.onShowClick } 
                                    className="fas fa-sort-down"
                                    style={{ cursor: 'pointer' }} 
                                />
                                <i 
                                    className="fas fa-times" 
                                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                ></i>
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">Email : {email}</li>
                                    <li className="list-group-item">Phone : {phone}</li>
                                </ul>
                            ) : null}
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}
 
export default Contact;