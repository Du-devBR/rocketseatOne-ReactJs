import { Play } from 'phosphor-react'
import {  useForm } from 'react-hook-form'
import {  zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles'
import { useState } from 'react'


// interface INewCycleFormData {
//   task: string;
//   minutesAmount: number
// }

//Usando type ao inves de interface para integrar junto a o zod.infer

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60)
})

interface ICycle {
  id: string;
  task: string;
  minutesAmount: number;

}

export function Home(){

  const [cycles, setCycles] = useState<ICycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const {register, handleSubmit, watch, formState, reset} = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })
  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data :NewCycleFormData){
    const id = String(new Date().getTime())
    const newCycle: ICycle = {
      id: id,
      task: data.task,
      minutesAmount: data.minutesAmount
    }
    setCycles(state =>[...state, newCycle])
    setActiveCycleId(id)
    reset()
  }

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  console.log(activeCycle)

  return(
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            placeholder='Dê um nome para seu projeto'
            list='task-suggestion'
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
            step={5}
            // min={0}
            // max={60}
            {...register('minutesAmount', {valueAsNumber: true})}
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
          disabled={isSubmitDisabled}
          >
            <Play size={24} /> Começar
        </StartCountdownButton>
      </form>

    </HomeContainer>
  )
}
