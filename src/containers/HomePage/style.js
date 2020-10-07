import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePageWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction:column;
`;

export const ProductItemWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
justify-content: space-evenly;
align-content: space-between;
align-items: start;
padding: 4rem 0;
grid-gap: 4rem 2rem;
@media ${props => props.theme.mediaQueries.small} {
  grid-template-columns: repeat(auto-fit, minmax(10rem, 23rem));
  justify-content: space-around;
  grid-gap: 4rem 1.5rem;
}
@media ${props => props.theme.mediaQueries.smaller} {
  grid-template-columns: repeat(auto-fit, minmax(10rem, 18rem));
  grid-gap: 4rem 1rem;
}
`;

export const BottomWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const ButtonWrapper = styled(Link)`
    padding: 15px;
    background-color: var(--color-primary-light);
    color: white;
    text-decoration: none;
    font-size: 1.3rem;
    border-radius:7px;
    box-shadow: 0 1rem 5rem var(--shadow-color);
    transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover{
        transform: translateY(-3px);
        background-color: white;
        color: var(--color-primary-light);
        border: 1px solid var(--color-primary-light);
        box-shadow: 0 1rem 5rem var(--shadow-color);
        transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:active {
        transform: translateY(2px);
    }
`;