import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {Error} from './style'

const ErrorForm = ({children}) => {
    return (
        <Error>
            <FontAwesomeIcon
                icon={faExclamationTriangle}
                size="2x"
                style={{ marginRight: "5px"}}
            />
            <p>{children}</p>
        </Error>
    );
}

export default ErrorForm;