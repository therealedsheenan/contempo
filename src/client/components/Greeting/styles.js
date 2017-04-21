import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: ${props => props.theme.primary};
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${props => props.theme.secondary};
`;
