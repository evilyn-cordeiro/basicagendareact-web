import React from 'react';
/**
 * As importações estão sendo realizadas
 * para que cada item possa ser utilizado e 
 * chamado quantas vezes necessário
 * ao longo do código. E quando chamado
 * e não importado no início do código
 * mensagens de erro irão aparecer.
 */
import IconSelfCare, { IconElipse } from '../icon';
import { StyledCard, StyledTop, Title, Title1, Top, Center, Subtitle, Status, IconContainer, StyledProfile, StyledFooter, StyledProfileEnd } from './styles';
/**
 * 
 * @returns StyledCard constatado como o card principal
 * contém títulos e ícone atribuído como "className" e
 * eestilizado como styled component.
 */
export default function CardApp({
  icon = <IconSelfCare />,
  title,
  hours,
  subtitle,
  status,
  ...props
  /**
   * propriedades especificadas na função 
   * @CardApp para a reutilização do componente
   * modificando apenas as informações internas.
   * Ou seja:. Qualquer propriedade pode ser especificada
   * e quando não acrescenta-se "...props" que designará 
   * outras propriedades que o elemento terá como no 
   * exemplo aplicado: cor.
   *  */
}) {
  return (
    <StyledTop {...props}>
      <IconContainer>
        {icon}
      </IconContainer>
      <StyledCard>
        <Top>
          <Title>{title}</Title> <IconElipse />
        </Top>
        <Center>
          <Title1>{hours}</Title1>
          <Subtitle>{status}{subtitle}</Subtitle>
        </Center>
      </StyledCard>
    </StyledTop>
  );
}
