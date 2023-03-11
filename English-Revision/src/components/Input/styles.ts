import styled from 'styled-components'
import Colors from '../../styles/colors.json'


export const InputContainer = styled.input`
  width: 280px;
  height: 32px;

  margin-left: 12px;
  padding: 16px;

  border-radius: 12px;
  border-style: solid;
  border-width: 2px;
  border-color: ${Colors.backgroundButton};

  background-color: ${Colors.backgroundInput};

  outline: none;

  color: ${Colors.white};
  font-size: 0.8rem;
  font-family: 'Heebo';
`