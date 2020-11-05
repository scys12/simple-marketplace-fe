import styled from 'styled-components';

export const InputGroup = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & svg {
        position: absolute;
        left: 10px;
        z-index: 10;
        transition: all 0.2s ease-in;
    }
`;

export const InputWrapper = styled.input`
    padding: 10px;
    padding-left: 35px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    transition: all 0.2s ease-in;
    &:focus{
        box-shadow: 0 0 1px 2px var(--color-primary-lighter);
        outline: none;
        transform: translateY(-5px);
        border-color: transparent;
    }
    &:focus ~ svg {
        transform: translateY(-5px);
    }    
    color: var(--color-primary-light);
    & span {
        color: #000;
    }
`;

export const Wrapper = styled.div`
    margin: 10px;
    display:flex;
    flex-direction: column;
    & label {
        font-weight: 500;
        margin-bottom: 5px;
        font-size: 15px;
        color: var(--color-primary);
    }
`;