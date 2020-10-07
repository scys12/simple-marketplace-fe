import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:25rem;
    padding: 2rem;
    margin-top: 4rem;
    border-right: 1px solid var(--border-color);
`;

export const Heading = styled.h2`
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: -0.5px;
    margin: 0 0 1rem 1rem;

    &:not(:first-child) {
        margin-top: 4rem;
    }
`;

export const LinkWrap = styled(Link)`
  text-decoration: none;
  display: block;
  outline: none;
  margin-bottom: 0.5rem;
`;