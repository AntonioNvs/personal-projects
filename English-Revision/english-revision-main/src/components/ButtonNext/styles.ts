import styled from 'styled-components'
import Colors from '../../styles/colors.json'

export const ButtonContainer = styled.div`
  width: 120px;
  height: 56px;

  background-color: ${Colors.backgroundButton};
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Heebo';
  font-size: 1rem;
  
  color: ${Colors.white};

  transform: 0.2s opacity;

  &:hover {
    opacity: 0.7;
  }
`;