import React from 'react';

class Contact extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <h4>{this.props.name}</h4>
                <ul>
                    <li>Email: {this.props.email}</li>
                    <li>Phone: {this.props.phone}</li>
                </ul>
            </div>
        );
    }
}
 
export default Contact;