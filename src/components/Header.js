import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { branding } = props
    return (
        <h1>{branding}</h1>
    );
}

Header.defaultProps = {
    branding: 'My App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}
 
export default Header;
