import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {InputWrapper, InputGroup, Wrapper} from './style'
const Input = (props) => {    
    return (
        <Wrapper>
            <label>{props.label}</label>
            <InputGroup>
                <InputWrapper 
                    name={props.name} 
                    ref={props.register} 
                    type={props.type}
                />
                <FontAwesomeIcon
                    icon={props.icon}
                    size={props.size}
                    style={props.style}
                />
            </InputGroup>
        </Wrapper>
    );
}

export default Input;