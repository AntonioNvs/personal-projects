import React, { useEffect, useState } from 'react'

import { ButtonContainer } from './styles'

import Colors from '../../styles/colors.json'

export interface ButtonAnswerProps {
  state: string
  onclick?(): void;
}

const ButtonAnswer: React.FC<ButtonAnswerProps> = ({ state, onclick }) => {

  const [color, setColor] = useState<string>(Colors.gray)

  useEffect(() => {
    setColor(state === 'wrong' ? Colors.red : state === 'answering' ? Colors.gray : Colors.green)
  }, [state])

  return (
    <ButtonContainer backgroundColor={color} onClick={onclick ? onclick : () => {}} >
      Responder!
    </ButtonContainer>
  )
}

export default ButtonAnswer