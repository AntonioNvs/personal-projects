import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import MicrophoneIcon from '../../assets/microphone.svg'
import AppContainer from '../../components/AppContainer/AppContainer';
import ButtonAnswer from '../../components/ButtonAnswer/ButtonAnswer';
import ButtonNext from '../../components/ButtonNext/ButtonNext';
import Heading from '../../components/Heading/Heading';
import Icon from '../../components/Icon/Icon';
import PhraseText from '../../components/PhraseText/PhraseText';
import { PhraseDTO, SelectPhrases } from '../../functions/phrases';
import { GetPontuation, GetPontuationInAPhrase, SetPontuation } from '../../functions/pontuation';

import { AnswerRecognitionText, ButtonsContainer } from './styles';

const RecognitionScreen: React.FC = () => {
  const { transcript } = useSpeechRecognition()

  const [textTranscript, setTextTranscript] = useState('. . .')
  const [isRecognizing, setIsRecognizing] = useState(false)
  const [phrase, setPhrase] = useState<PhraseDTO>({} as PhraseDTO)
  const [stateUser, setStateUser] = useState<string>('answering')
  const [pont, setPont] = useState(0)
  const [alreadyAnswer, setAlreadyAnswer] = useState(false)

  useEffect(() => {
    setPont(GetPontuation())

    setPhrase(SelectPhrases())
  }, [])

  function onSend() {
    if(alreadyAnswer) return;
    
    const pontuation = GetPontuationInAPhrase({ answer: textTranscript, data: phrase })
    
    setPont(SetPontuation(pontuation))

    if (pontuation >= 0) {
      setStateUser('right')
    } else {
      setStateUser('wrong')
    }

    setAlreadyAnswer(true)
  }

  useEffect(() => {
    if(transcript !== ''){
      setTextTranscript(transcript)
      setIsRecognizing(true)
    }
    else
      setIsRecognizing(false)

  }, [transcript])

  function startRecognition() {
    SpeechRecognition.startListening()
    setIsRecognizing(true)
  }

  return (
    <AppContainer>
      <Heading screen="Reconhecimento" pontuation={pont}/>
      <PhraseText>{phrase.phrase}</PhraseText>
      <Icon image={MicrophoneIcon} onclick={() => startRecognition()} activated={isRecognizing}/>
      <AnswerRecognitionText> {textTranscript} </AnswerRecognitionText>

      <ButtonsContainer>
        <ButtonAnswer state={stateUser} onclick={onSend}/>
        <ButtonNext actualPage="/recognition"/>
      </ButtonsContainer>
    </AppContainer>
  );
}

export default RecognitionScreen;
