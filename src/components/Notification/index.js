import React from 'react';
import {Notif} from './style'

const Notification = ({type, children}) => {
    return (
        <Notif color={type}>
            {children}
        </Notif>
    );
}

export default Notification;