import React from 'react';
import PropTypes from 'prop-types';
// import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup'
import { connect } from 'react-redux';
import { addContact } from '../../redux/actions/contactActions'

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = ( e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        if(name === ''){
            this.setState({errors: {name: 'Name is Required'}})
            return;
        }
        if(email === ''){
            this.setState({errors: {email: 'Email is Required'}})
            return;
        }
        if(phone === ''){
            this.setState({errors: {phone: 'Phone is Required'}})
            return;
        }

        const newContact = {
            // id: uuid(), 
            name,
            email,
            phone 
        }

        this.props.addContact(newContact);
        
        // Clear State
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}            
        })
        //Goto Home Page redirect
        this.props.history.push('/');
    }

    render() {
        const { name, email, phone, errors }  = this.state;

        return (
                <div className="card mb-3">
                    <div className="card-header">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this)}>
                                <TextInputGroup
                                    label="Name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name...."
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <TextInputGroup
                                    label="Email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email...."
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <TextInputGroup
                                    label="Phone"
                                    type="text"
                                    name="phone"
                                    placeholder="Enter Phone...."
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                />
                                <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                            </form>
                        </div>
                </div>  
        )
    }
}

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired
}
 
export default connect(
    null,
    { addContact }
)(AddContact);