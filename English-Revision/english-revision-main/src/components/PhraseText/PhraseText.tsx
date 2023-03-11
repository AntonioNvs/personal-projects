import React from 'react'

import { PhraseTextStyle } from './styles'

const PhraseText: React.FC = ({ children }) => (
  <PhraseTextStyle>{children}</PhraseTextStyle>
);

export default PhraseText;