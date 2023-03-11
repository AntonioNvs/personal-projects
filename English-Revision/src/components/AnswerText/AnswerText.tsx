import React from 'react'
import { TextAnswerStyles } from './styles'

interface AnswerTextProps {
  text: string;
}

const AnswerText: React.FC<AnswerTextProps> = ({ text }) => {
  return (
      <TextAnswerStyles>
        {text}
      </TextAnswerStyles>
  )
}

export default AnswerText