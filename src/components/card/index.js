import React from 'react';
import IconSelfCare, { IconElipse } from '../icon';
import { StyledCard, StyledTop, Title, Top } from './styles';
/**
 * 
 * @returns StyledCard constatado como o card principal
 * contém títulos e ícone atribuído como "className" e
 * eestilizado como styled component.
 */
export default function CardApp() {
  return (
    <StyledTop>
      <StyledCard>
        <Top>
          <Title>Self Care</Title> <IconElipse/> <IconSelfCare/>
        </Top>
      </StyledCard>
    </StyledTop>
  );
}
