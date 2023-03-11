import styled from 'styled-components'
import Colors from '../../styles/colors.json'

export const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Arial';
  color: ${Colors.white};
`;

export const Description = styled.p`
  color: ${Colors.white};
  font-size: 1rem;
  font-family: sans-serif;

  margin: 16px;

  max-width: 720px;
  text-align: justify;
`;

export const ButtonStart = styled.button`
  margin-top: 32px;

  width: 160px;
  height: 56px;
  background-color: ${Colors.background};

  border-color: ${Colors.blue};
  border-radius: 12px;
  border-style: solid;
  border-width: 2px;

  font-size: 1.2rem;
  font-family: 'Heebo';
  color: ${Colors.white};
`;
