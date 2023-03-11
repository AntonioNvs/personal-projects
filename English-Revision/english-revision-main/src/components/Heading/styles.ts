import styled from 'styled-components'

import Colors from '../../styles/colors.json'

export const HeadingContainer = styled.div`
  margin: auto;

  top: 32px;

  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Heebo';
  font-size: 1.4rem;
  font-weight: bold;

  color: ${Colors.white};
`


export const TextPontuation = styled.div`
  font-family: 'Heebo';
  font-size: 1rem;

  color: ${Colors.white};
`;