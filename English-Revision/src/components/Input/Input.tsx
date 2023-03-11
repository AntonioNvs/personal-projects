import React from 'react'

import { InputContainer } from './styles';

interface InputProps {
  setTextInput?: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({ setTextInput }) => (
  <InputContainer onChange={(event) => setTextInput ? setTextInput(event.target.value) : ''}/>
)

export default Input;