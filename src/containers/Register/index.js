import React, {useState, useEffect} from "react";
import { useForm, } from "react-hook-form";
import Input from "../../components/Input/index";
import {Form, Wrapper, Heading, Button, ButtonWrapper } from "./style";
import {faKey, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import ErrorForm from '../../components/ErrorForm/index';
import {registerUser} from './action'
import Loader from '../../components/Loader/index';
import Notification from '../../components/Notification/index';

const Register = ({registerUser, registerData}) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [ isLoading, setLoading] = useState(false);
    const [ isSamePassword, setSamePassword] = useState(true);

    const onSubmit = (data) => {
        setLoading(true);
        registerUser(data);
    };

    useEffect( () => {
        setLoading(false);
    }, [registerData]);

    const checkPassword = (value) => {
        setSamePassword(true);
        return value === watch('password');
    };

    const setPasswordMessage = () => {
        setSamePassword(false);
        return "Passwords don't match";
    };

    return isLoading ? 
        <div>
            <Loader/>
        </div> : (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Heading>Register</Heading>
                {registerData.status === true && (
                    <Notification type={'success'}>Account created</Notification>
                )}
                {registerData.status === false && (
                    <Notification type={'danger'}>Username/Email exists</Notification>
                )}
                <Input
                    name="email"
                    label="Email"
                    register={register({ required: true, maxLength: 25 })}
                    type="email"
                    icon={faEnvelope}
                    size="2x"
                    style={{ marginRight: "10px", color: "var(--color-primary-light)" }}
                >
                </Input>

                {errors.email && errors.email.type === 'required' && (
                    <ErrorForm>This is required</ErrorForm>
                )}
                {errors.email && errors.email.type === 'maxLength' && (
                    <ErrorForm>Maximal 25 character length</ErrorForm>
                )}

                <Input
                    name="username"                
                    label="Username"
                    register={register({ required: true, maxLength: 25, minLength: 4 })}
                    type="text"
                    icon={faUser}
                    size="2x"
                    style={{ marginRight: "10px", color: "var(--color-primary-light)" }}
                >
                </Input>
                {errors.username && errors.username.type === 'required' && (
                    <ErrorForm>This is required</ErrorForm>
                )}
                {errors.username && (errors.username.type === 'maxLength' || errors.username.type === 'minLength') && (
                    <ErrorForm>Minimum 4 character length and maximal 25 character length</ErrorForm>
                    
                )}

                <Input
                    name="password"
                    label="Password"
                    register={register({ required: true, maxLength: 25, minLength: 4 })}
                    type="password"
                    icon={faKey}
                    size="2x"
                    style={{ marginRight: "10px", color: "var(--color-primary-light)" }}
                >
                </Input>
                {errors.password && errors.password.type === 'required' && (
                    <ErrorForm>This is required</ErrorForm>
                )}
                {errors.password && (errors.password.type === 'maxLength' || errors.password.type === 'minLength') && (
                    <ErrorForm>Minimum 4 character length and maximal 25 character length</ErrorForm>
                )}

                <Input
                    name="confirmationPassword"
                    label="Confirmation Password"
                    register={register({ validate: (value) => checkPassword(value) || setPasswordMessage() ,required: true })}
                    type="password"
                    icon={faKey}
                    size="2x"
                    style={{ marginRight: "10px", color: "var(--color-primary-light)" }}
                >
                </Input>
                {errors.confirmationPassword && errors.confirmationPassword.type === 'required' && (
                    <ErrorForm>This is required</ErrorForm>
                )}
                {!isSamePassword && (
                    <ErrorForm>Passwords dont match</ErrorForm>
                )}

                <ButtonWrapper>
                    <Button type="submit">REGISTER</Button>
                </ButtonWrapper>
            </Form>
        </Wrapper>
    );
};

const mapStateToProps = ({ registerData }) => {
    return { registerData };
};

export default connect(
    mapStateToProps,
    { registerUser }
)(Register)