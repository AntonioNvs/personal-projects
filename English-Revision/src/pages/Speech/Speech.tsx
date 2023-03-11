import React, { useEffect, useState } from 'react'

import AppContainer from '../../components/AppContainer/AppContainer'
import Icon from '../../components/Icon/Icon'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import Input from '../../components/Input/Input'

import Sound from '../../assets/sound.svg'
import { InputContainer, SetFrequencyButtonsContainer, SetFrequencyButton } from './styles'
import ButtonAnswer from '../../components/ButtonAnswer/ButtonAnswer'
import AnswerText from '../../components/AnswerText/AnswerText'
import { GetPontuation, GetPontuationInAPhrase, SetPontuation } from '../../functions/pontuation'
import Heading from '../../components/Heading/Heading'
import { PhraseDTO, SelectPhrases } from '../../functions/phrases'


const SpeechScreen: React.FC = () => {
  const [textInput, setTextInput] = useState("I'm fine, and you?")
  const [viewAnswer, setViewAnswer] = useState(false)
  const [speed, setSpeed] = useState(0.6)

  const [isSpeaking, setIsSpeaking] = useState(false)
  const [phrase, setPhrase] = useState<PhraseDTO>({} as PhraseDTO)
  const [stateUser, setStateUser] = useState<string>('answering')
  const [alreadyAnswer, setAlreadyAnswer] = useState(false)
  const [pont, setPont] = useState(0)

  useEffect(() => {
    setPont(GetPontuation())

    setPhrase(SelectPhrases())
  }, [])


  function onSend() {
    if(alreadyAnswer) return;

    const pontuation = GetPontuationInAPhrase({ answer: textInput, data: phrase })
    
    setPont(SetPontuation(pontuation))

    setViewAnswer(true)

    if (pontuation >= 0) {
      setStateUser('right')
    } else {
      setStateUser('wrong')
    }

    setAlreadyAnswer(true)
  }

  function say() {
    setIsSpeaking(true)
    const speak = new SpeechSynthesisUtterance();
    speak.text = phrase.phrase;
    speak.rate = speed
    speak.lang = "en-US"
    speak.onend = () => setIsSpeaking(false)

    window.speechSynthesis.speak(speak);
  }

  function changeSpeed(rate: number) {
    setSpeed(value => {
      if(value + rate <= 2 && value + rate >= 0.1)
        return value + rate
      return value
    })
  }

  return (
    <AppContainer>
      <Heading screen="Fala" pontuation={pont}/>
      <Icon image={Sound} onclick={say} activated={isSpeaking}/>

      <SetFrequencyButtonsContainer>
        <SetFrequencyButton onClick={() => changeSpeed(0.1)}>
          +
        </SetFrequencyButton>

        <SetFrequencyButton onClick={() => changeSpeed(-0.1)}>
          -
        </SetFrequencyButton>
      </SetFrequencyButtonsContainer>

      <InputContainer>
        <Input setTextInput={setTextInput}/>
        <ButtonAnswer state={stateUser} onclick={onSend}/>
      </InputContainer>
      <AnswerText text={viewAnswer ? phrase.phrase : ''}/>

      <ButtonNext actualPage="/speech"/>
    </AppContainer>
  )
}

export default SpeechScreen