import styled from 'styled-components';


/**
 * @StyledProfile é o item que contém
 * a cor mais clara e está localizado
 * à esquerda. Recebe o avatar,
 * Nome de Usuário e outras informações
 * relevantes para o perfil.
 */
export const StyledProfile = styled.div`
  width: 271px;
  height: 484px;
  background-color: hsla(236, 45%, 20%, 1);
  border-radius: 20px;
  align-items:end;
`;
  
/**
 * StyledFooter é o item que contém 
 * a coloração escura e está localizado
 * à esquerda e está com o menu
 * de "Daily" "Weekly" "Moothly".
 */
export const StyledFooter = styled.div `
  height: 310px;
  width: 271px;
  border-radius: 20px;
  background-color: hsla(235, 45%, 61%, 1);  
  align-items:end;
  
`;
/**
 * StyledProfileEnd contém o menu de
 * dias, semanas e meses.
 */
export const StyledProfileEnd = styled.div`
    display: flex;
    justify-content:space-between;
    margin: 20px;
  
  `;