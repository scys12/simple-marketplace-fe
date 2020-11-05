import React from 'react';
import {InputWrapper, InputGroup, Wrapper} from './style'
const Input = (props) => {    
    return (
        <Wrapper>
            <label>{props.label}</label>
            <InputGroup>
                <InputWrapper 
                    name={props.label} 
                    ref={props.register} 
                    type={props.type}
                />
                {props.children}
            </InputGroup>
        </Wrapper>
    );
}

export default Input;