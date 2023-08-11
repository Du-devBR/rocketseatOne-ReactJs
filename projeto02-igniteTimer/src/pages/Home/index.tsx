import { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles'

export function Home(){
  return(
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            placeholder='Dê um nome para seu projeto'
            list='task-suggestion'

          />
          <datalist id='task-suggestion'>
            <option value="projeto1"></option>
            <option value="projeto2"></option>
            <option value="projeto3"></option>
            <option value="projeto4"></option>
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder='00'
            step={5}
            min={0}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton
          type="submit"
          disabled={true}
          >
            <Play size={24} /> Começar
        </StartCountdownButton>
      </form>

    </HomeContainer>
  )
}
