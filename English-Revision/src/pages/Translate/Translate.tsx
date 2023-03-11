import React, { useState, useEffect } from 'react'

import AnswerText from '../../components/AnswerText/AnswerText'
import AppContainer from '../../components/AppContainer/AppContainer'
import ButtonAnswer from '../../components/ButtonAnswer/ButtonAnswer'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import Heading from '../../components/Heading/Heading'
import Input from '../../components/Input/Input'
import PhraseText from '../../components/PhraseText/PhraseText'
import {  PhraseWithTranslate,  SelectPhrasesWithTranslate } from '../../functions/phrases'
import { GetPontuation, GetPontuationInAPhraseTranslate, SetPontuation } from '../../functions/pontuation'

import { InputContainer } from './styles'

const TranslateScreen: React.FC = () => {

  const [textInput, setTextInput] = useState('')
  const [viewAnswer, setViewAnswer] = useState(false)

  const [phrase, setPhrase] = useState<PhraseWithTranslate>({} as PhraseWithTranslate)
  const [stateUser, setStateUser] = useState<string>('answering')
  const [alreadyAnswer, setAlreadyAnswer] = useState(false)
  const [pont, setPont] = useState(0)

  useEffect(() => {
    setPont(GetPontuation())

    setPhrase(SelectPhrasesWithTranslate())
  }, [])

  function onSend() {
    if(alreadyAnswer) return;

    const pontuation = GetPontuationInAPhraseTranslate({ answer: textInput, data: phrase })

    setPont(SetPontuation(pontuation))

    setViewAnswer(true)

    if (pontuation >= 0) {
      setStateUser('right')
    } else {
      setStateUser('wrong')
    }

    setAlreadyAnswer(true)
  }

  return (
    <AppContainer>
      <Heading screen="Tradução" pontuation={pont}/>
      <PhraseText>{phrase.phrase}</PhraseText>
      <InputContainer>
        <Input setTextInput={setTextInput}/>
        <ButtonAnswer state={stateUser} onclick={onSend}/>
      </InputContainer>
      <AnswerText text={viewAnswer ? phrase.translate: ''}/>
      <ButtonNext actualPage="/translate"/>
    </AppContainer>
  )
}

export default TranslateScreen