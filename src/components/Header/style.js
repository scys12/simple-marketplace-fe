import styled from 'styled-components';

export const NavBar = styled.div`
    display:flex;
    height:100%;
    width:100%;
    padding: 10px 0;
    justify-content: flex-end;
    border-bottom: 1px solid var(--border-color);
`;

export const NavBarGroup = styled.div`
    margin: 0 25px;
    display:flex;
`;

export const A = styled.a`
    color: var(--color-primary-light);
    font-size:14px;
    text-decoration:none;
    &:hover {
        color: #6cc0e5;
    }
`;

export const NavBarLink = styled.div`
    margin:10px;
    font-weight:600;
`;