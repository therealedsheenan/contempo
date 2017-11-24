import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${props => props.theme.secondary};
`;
