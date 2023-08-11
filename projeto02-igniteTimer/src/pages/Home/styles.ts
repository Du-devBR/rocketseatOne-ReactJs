import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['gray-100']};
  font-size: 1.25rem;
  font-weight: 700;
  flex-wrap: wrap;

`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  border-bottom: 2px solid ${props => props.theme['gray-500']};
  color: ${props => props.theme['gray-100']};
  outline: none;

  &:focus{
    box-shadow: none;
    border-color: ${props => props.theme['green-500']};
  }

  &::placeholder{
    color: ${props => props.theme['gray-500']}
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator{
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  width: 100%;
  line-height: 8rem;
  color: ${props => props.theme['gray-100']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  span{
    background: ${props => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 0.5rem;
  }

`

export const Separator = styled.div`
  padding: 2rem 0;
  color:  ${props => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`


export const StartCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['gray-100']};
  font-size: 1rem;
  background: ${props => props.theme['green-500']};
  border-radius: 0.5rem;
  border: none;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  font-weight: 700;
  transition: 0.5s;

  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover{
    transition: 0.5s;
    background: ${props => props.theme['green-700']};
  }
`
