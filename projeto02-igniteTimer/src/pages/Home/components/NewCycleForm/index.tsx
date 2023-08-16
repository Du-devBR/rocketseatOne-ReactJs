
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from 'react';
import { CyclesContext } from '../..';
import { useFormContext } from "react-hook-form";


export function NewCycleForm() {

  const {activeCycle} = useContext(CyclesContext)
  const {register} = useFormContext()

  return(
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          type="text"
          placeholder='Dê um nome para seu projeto'
          list='task-suggestion'
          disabled={!!activeCycle}
          {...register('task')}

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
            // step={5}
            // min={0}
            // max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', {valueAsNumber: true})}
        />
        <span>minutos.</span>
    </FormContainer>
  )
}