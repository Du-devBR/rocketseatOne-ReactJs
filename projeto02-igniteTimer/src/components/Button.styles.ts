import styled, {css} from 'styled-components'
export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success'

interface IButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'blue',
  secundary: 'pink',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<IButtonContainerProps>`

  width: 100px;
  height: 50px;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */
`
