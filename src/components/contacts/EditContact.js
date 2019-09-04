import React from 'react';

import axios from 'axios';
import TextInputGroup from '../layout/TextInputGroup'


class EditContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    // onNameChange = (e) => {
    //     this.setState({ name: e.target.value })
    // }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = async ( e) => {
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

        const updContact = {
            name,
            email,
            phone
        }
        
        
        
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
                            <div className="card-header">Edit Contact</div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this,)}>
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
                                        <input type="submit" value="Update Contact" className="btn btn-light btn-block" />
                                    </form>
                                </div>
                        </div>
                    
        )
    }
}
 
export default EditContact;