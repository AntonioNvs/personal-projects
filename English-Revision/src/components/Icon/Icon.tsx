import React from 'react'

import { ContainerIcon, ImageIcon } from './styles'

interface IconProps {
  image: any;
  activated: boolean;
  onclick?(): any;
}

const Icon: React.FC<IconProps> = ({ image, activated, onclick }) => (
  <ContainerIcon onClick={onclick ? onclick : () => {}} activated={activated}>
    <ImageIcon src={image}/>
  </ContainerIcon>
)

export default Icon