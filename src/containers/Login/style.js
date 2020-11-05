import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width:500px;
    box-shadow: 1px 0px 5px 1px var(--shadow-color);
    border-radius: 10px;
    transition: all 0.3s ease-out;
    &:hover{
        box-shadow: 1px 0px 7px 3px var(--shadow-color);
        transform: translateY(10px);
    }
`;

export const Heading = styled.h4`
    color: var(--color-primary-dark);
    text-align: center;
    font-size: 25px;    
`;

export const Button = styled.button`
    padding: 10px 40px;
    background-color: var(--color-primary-light);
    color: #fff;
    border: transparent;
    border-radius: 30px;
    font-size: 15px;
    transition: all 0.2s ease;
    &:hover{
        background-color: var(--color-primary-lighter);
        color: var(--color-primary-dark);
    }
`;

export const ButtonWrapper = styled.div`
    display:flex;
    justify-content: center;
    margin: 10px;    
`;

export const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    padding: 20px;
`;

export const Error = styled.div`
    margin: 0 10px;
    color: #de2323;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center;
    font-size:10px;
`;