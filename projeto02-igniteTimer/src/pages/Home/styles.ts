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
export const StopCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['gray-100']};
  font-size: 1rem;
  background: ${props => props.theme['red-500']};
  border-radius: 0.5rem;
  border: none;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  font-weight: 700;
  transition: 0.5s;
`
