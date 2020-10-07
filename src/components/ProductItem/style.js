import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductItemWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background-color: transparent;
    border-radius: 0.8rem;
    transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
    
    &:hover {
        transform: scale(1.03);
        ::after {
            transform: scaleY(1);
            opacity: 1;
        }
    }
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.8rem;
        transform: scaleY(0);
        transform-origin: top;
        opacity: 0;
        background-color: var(--color-primary);
        z-index: -99;
        box-shadow: 0rem 2rem 5rem var(--shadow-color-dark);
        transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }
`;

export const ImgLoading = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 300px;
    border-radius: 0.8rem;
    box-shadow: 0rem 2rem 5rem var(--shadow-color);
    transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const ProductItemImg = styled.img`
  width: 100%;
  height: 38rem;
  object-fit: ${props => (props.error ? 'contain' : 'cover')};
  border-radius: 0.8rem;
  padding: ${props => (props.error ? '2rem' : '')};
  box-shadow: 0rem 2rem 5rem var(--shadow-color);
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);

  ${ProductItemWrapper}:hover & {
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    box-shadow: none;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    height: 28rem;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 1.5rem 1.5rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-primary-light);
  margin-bottom: 1rem;
  line-height: 1.4;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  ${ProductItemWrapper}:hover & {
    color: var(--text-color);
  }
`;

export const Price = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 1rem;
  line-height: 1.4;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  
  ${ProductItemWrapper}:hover & {
    color: var(--text-color);
  }
`;