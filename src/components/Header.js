import React from 'react';

const Header = (props) => {
    const { branding } = props
    return (
        <h1>{branding}</h1>
    );
}
 
export default Header;
