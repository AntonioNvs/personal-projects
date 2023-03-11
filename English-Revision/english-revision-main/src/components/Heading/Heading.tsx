import React from 'react'
import { HeadingContainer, TextPontuation, Title, CentralContainer } from './styles'

interface HeadingProps {
  screen: string;
  pontuation?: number;
}

const Heading: React.FC<HeadingProps> = ({ screen, pontuation }) => {
  return (
    <HeadingContainer>
      <CentralContainer>
        <Title>{ screen }</Title>
        <TextPontuation>Pontuação: {pontuation}</TextPontuation>

      </CentralContainer>
    </HeadingContainer>
  )
}

export default Heading