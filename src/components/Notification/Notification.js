import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return (
        <p>{message}</p>
    )
}
Notification.propType = {
    message: PropTypes.array.isRequired,
}
export default Notification;