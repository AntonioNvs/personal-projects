import React from 'react';

import { Container, Footer } from './styles';

const AppContainer: React.FC = ({ children }) => (
  <Container>
    {children}
    <Footer>
      © Antônio Caetano Neves Neto - {' '}

      <a href="https://github.com/AntonioNvs" target="_blank" rel="noreferrer">
        Github
      </a>
    </Footer>
  </Container>
)

export default AppContainer