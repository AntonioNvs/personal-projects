import styled from 'styled-components';
import Colors from '../../styles/colors.json'

interface ContainerIconProps {
  activated: boolean;
}

export const ContainerIcon = styled.div<ContainerIconProps>`
  width: 120px;
  height: 120px;
  margin-top: 24px;

  border-width: ${(props) => props.activated ? 6 : 2}px;
  border-style: solid;
  border-color: ${Colors.blue};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: 0.2 opacity;
  transform: 0.2 border-width;

  &:hover {
    opacity: 0.7;
  }
`;

export const ImageIcon = styled.img`
  width: 80px;
  height: 80px;
`;