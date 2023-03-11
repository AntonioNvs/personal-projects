import React from 'react'
import { useHistory } from 'react-router-dom'

import { ButtonContainer } from './styles'

interface ButtonNextProps {
  actualPage: string;
}

const ButtonNext: React.FC<ButtonNextProps> = ({ actualPage }) => {
  const history = useHistory()

  function nextPage() {
    const pagesNames = ['/translate', '/speech', '/recognition'].filter(page => page !== actualPage)

    const random = Math.floor(Math.random() * pagesNames.length)
  
    history.push(pagesNames[random])
  }

  return (
    <ButtonContainer onClick={nextPage}>
      Próximo!
    </ButtonContainer>
  )
}

export default ButtonNext