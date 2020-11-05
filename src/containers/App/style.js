import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  user-select: none;
`;

export const MainWrapper = styled.div`
  display: flex;
  width:100%;
  flex-direction:column;
  height:100%;
`;

export const LoadWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 4rem;
`;