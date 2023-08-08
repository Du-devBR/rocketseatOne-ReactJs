import { ButtonContainer, ButtonVariant } from "./Button.styles"

// import styles from './Button.styled.ts'
interface IButtonProps {
  variant?: ButtonVariant
}

export function Button({variant = 'primary'}: IButtonProps){
  return(
    <ButtonContainer variant={variant}>Enviar</ButtonContainer>
  )
}
