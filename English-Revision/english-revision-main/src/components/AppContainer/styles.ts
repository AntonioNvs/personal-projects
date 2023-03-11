import styled from 'styled-components'
import Colors from '../../styles/colors.json'

export const Container = styled.div`
  background-color: ${Colors.background};

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const Footer = styled.footer`
  margin: auto;

  font-size: 1.1rem;
  font-family: sans-serif;
  color: ${Colors.white}
`;
