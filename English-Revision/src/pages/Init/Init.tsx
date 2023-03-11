import React from 'react'
import { useHistory } from 'react-router'
import AppContainer from '../../components/AppContainer/AppContainer'
import { Title, ButtonStart, Description } from './styles'

const InitScreen: React.FC = () => {
  const history = useHistory()

  function start() {
    history.push('/recognition')
  }

  return (
    <AppContainer>
      <Title>Revisão de inglês!</Title>
      <Description>
        Olá! Esse programa se baseia em alguns testes de inglês, como forma de treino de escrita, escuta e fala. <br></br>
        <br></br>
        Para tanto, será selecionado frases aleatoriamente para realizar a tarefa proposta, das quais possuem três: <br></br>
         - Translate: traduzir uma frase para português;<br></br>
         - Recognition: falar uma frase em inglês;<br></br>
         - Speech: ouvir uma frase em inglês e transcrever-la.<br></br>
        <br></br>
        Assim, você irá ganhar uma pontuação conforme sua resposta se assemelhou a original e dependendo também da complexidade da palavra. Entretanto, algumas observações devem ser feitas:<br></br>
         - As frases foram pegas automaticamente, logo, pode haver algumas com erros, basta somente passar para a próxima; <br></br>
         - As traduções são ao pé da letra, sem análise de contexto, portanto, você pode estar certo mas mesmo assim errar a tarefa. <br></br>

      </Description>
      <ButtonStart onClick={start}>Começar!</ButtonStart>
    </AppContainer>
  )
}

export default InitScreen