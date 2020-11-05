import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/index";
import { Form, Wrapper, Heading, Button, ButtonWrapper } from "./style";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import {login} from "./action";
import Loader from '../../components/Loader/index';
import ErrorForm from '../../components/ErrorForm/index';
import Notification from '../../components/Notification/index';

const Login = ({login, userData}) => {
    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        setLoading(true);
        login(data);
    };

    useEffect(() => {
        setLoading(false);
    }, [userData.loading, isLoading])
        
    return isLoading ?
        <div>
            <Loader/>
        </div> : (        
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Heading>Login</Heading>
                {userData.error && (
                    <Notification type={'danger'}>Username/Password wrong</Notification>
                )}
                <Input
                    name="username"
                    label="Username"
                    register={register({ required: true, maxLength: 25 })}
                    type="text"
                    icon={faUser}
                    size="2x"
                    style={{ marginRight: "10px", color: "var(--color-primary-light)" }}
                >
                </Input>
                {errors.username && errors.username.type === 'required' && (
                    <ErrorForm>This is required</ErrorForm>
                )}
                {errors.username && errors.username.type === 'maxLength' && (
                    <ErrorForm>Maximal 25 character length</ErrorForm>
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
                <ButtonWrapper>
                    <Button type="submit">LOGIN</Button>
                </ButtonWrapper>
            </Form>
        </Wrapper>
    );
};

const mapStateToProps = ({ userData }) => {
    return { userData }
}

export default connect(
    mapStateToProps,
    { login }
)(Login)