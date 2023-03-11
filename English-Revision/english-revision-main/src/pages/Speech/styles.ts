import styled from 'styled-components'
import Colors from '../../styles/colors.json'

export const SetFrequencyButtonsContainer = styled.div`
  margin: 32px 0 32px 0;

  width: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SetFrequencyButton = styled.div`
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #4d0066;

  font-family: 'Heebo';
  font-size: 1.4rem;

  color: ${Colors.white};

  transform: 0.2s opacity;

  &:hover {
    opacity: 0.7;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  align-items: center;

  width: 100%;
  max-width: 540px;

  margin-top: 24px;
`