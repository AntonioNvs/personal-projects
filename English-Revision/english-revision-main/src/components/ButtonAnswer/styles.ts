import styled from 'styled-components'
import Colors from '../../styles/colors.json'

interface ButtonProps {
  backgroundColor: string;
}


export const ButtonContainer = styled.button<ButtonProps>`
  width: 140px;
  height: 56px;

  margin-left: 12px;
  margin-right: 24px;

  background-color: ${props => props.backgroundColor};

  outline: none;

  border-radius: 12px;
  border-style: none;

  font-family: 'Heebo';
  font-size: 0.8rem;
  font-weight: bold;
  color: ${Colors.black};

  transform: 0.2s opacity;

  &:hover {
    opacity: 0.7;
  }
`;