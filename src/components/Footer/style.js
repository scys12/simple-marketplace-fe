import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display:flex;
    justify-content:space-between;
    padding: 3px 0;
    box-shadow: 1px 0px 7px 2px #ddd;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding:15px 30px;
    background-color: var(--color-primary-lighter)
`;

export const FooterText = styled.p`
    color: var(--text-color);
    font-size:14px;
    font-weight: 500;
`;