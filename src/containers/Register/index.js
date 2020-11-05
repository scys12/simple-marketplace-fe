import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/index";
import { Error, Form, Wrapper, Heading, Button, ButtonWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle,faKey, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

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

const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Heading>Register</Heading>
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
                    label="Username"
                    register={register({ required: true, maxLength: 25, minLength: 4 })}
                    type="text"
                >
                    <FontAwesomeIcon
                        icon={faUser}
                        size="2x"
                        style={{ marginRight: "10px", color: "var(--color-primary-light)" }}
                    />
                </Input>

                {errors.Username && errors.Username.type === 'required' && (
                    renderError('This is required')
                )}
                {errors.Username && (errors.Username.type === 'maxLength' || errors.Username.type === 'minLength') && (
                    renderError('Minimum 4 character length and maximal 25 character length')
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

                <Input
                    label="Confirmation"
                    register={register({ required: true, maxLength: 25, minLength: 4 })}
                    type="password"
                >
                    <FontAwesomeIcon
                        icon={faKey}
                        size="2x"
                        style={{ marginRight: "10px", color: "var(--color-primary-light)" }}
                    />
                </Input>

                {errors.Confirmation && errors.Confirmation.type === 'required' && (
                    renderError('This is required')
                )}
                {errors.Confirmation && (errors.Confirmation.type === 'maxLength' || errors.Confirmation.type === 'minLength') && (
                    renderError('Minimum 4 character length and maximal 25 character length')
                )}
                
                <ButtonWrapper>
                    <Button type="submit">REGISTER</Button>
                </ButtonWrapper>
            </Form>
        </Wrapper>
    );
};

export default Register;