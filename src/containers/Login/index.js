import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/index";
import { Error, Form, Wrapper, Heading, Button, ButtonWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle,faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import {login} from "./action"
const renderError = (text) => {
    return(
        <Error>
            <FontAwesomeIcon
                icon={faExclamationTriangle}
                size="2x"
                style={{ marginRight: "5px"}}
            />
            <p>{text}</p>
        </Error>
    );
}

const Login = ({login}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => login(data);
    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Heading>Login</Heading>
                <Input
                    label="Email"
                    register={register({ required: true, maxLength: 25 })}
                    type="email"
                >
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        style={{ marginRight: "10px", color: "var(--color-primary-light)" }}
                    />
                </Input>
                {errors.Email && errors.Email.type === 'required' && (
                    renderError('This is required')
                )}
                {errors.Email && errors.Email.type === 'maxLength' && (
                    renderError('Maximal 25 character length')
                )}
                <Input
                    label="Password"
                    register={register({ required: true, maxLength: 25, minLength: 4 })}
                    type="password"
                >
                    <FontAwesomeIcon
                        icon={faKey}
                        size="2x"
                        style={{ marginRight: "10px", color: "var(--color-primary-light)" }}
                    />
                </Input>
                    {errors.Password && errors.Password.type === 'required' && (
                        renderError('This is required')
                    )}
                    {errors.Password && (errors.Password.type === 'maxLength' || errors.Password.type === 'minLength') && (
                        renderError('Minimum 4 character length and maximal 25 character length')
                    )}
                <ButtonWrapper>
                    <Button type="submit">LOGIN</Button>
                </ButtonWrapper>
            </Form>
        </Wrapper>
    );
};

export default connect(
    {},
    { login }
)(Login)