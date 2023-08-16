import { HandPalm, Play } from 'phosphor-react'
import { HomeContainer, StartCountdownButton, StopCountdownButton} from './styles'
import { createContext, useState } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Contdown'
import {  FormProvider, useForm } from 'react-hook-form'
import {  zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

//Usando type ao inves de interface para integrar junto a o zod.infer
interface ICycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date,
  interruptedDate?: Date,
  finishedDate?: Date

}
interface ICyclesContextType {
  activeCycle: ICycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const CyclesContext = createContext({} as ICyclesContextType)

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1).max(60)
})

export function Home(){

  const [cycles, setCycles] = useState<ICycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const {handleSubmit, watch, reset} = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number){
    setAmountSecondsPassed(seconds)
  }
  function markCurrentAsFinished(){
    setCycles((state) => state.map(cycle => {
      if(cycle.id === activeCycleId){
        return {...cycle, finishedDate: new Date()}
      }else {
        return cycle;
      }
    }))
  }

  function handleCreateNewCycle(data :NewCycleFormData){
    const id = String(new Date().getTime())
    const newCycle: ICycle = {
      id: id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    setCycles(state =>[...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset()
  }

  function handleInrruptCycle() {
    setCycles((state) => state.map(cycle => {
      if(cycle.id === activeCycleId){
        return {...cycle, interruptedDate: new Date()}
      }else {
        return cycle;
      }
    }))

    setActiveCycleId(null)
  }

  return(
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <CyclesContext.Provider value={
          {
            activeCycle,
            activeCycleId,
            markCurrentAsFinished,
            amountSecondsPassed,
            setSecondsPassed
            }
          }>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>
        {
          activeCycle ? (
            <StopCountdownButton
              type="button"
              onClick={handleInrruptCycle}
              >
                <HandPalm size={24} /> Interromper
            </StopCountdownButton>
          ) : <StartCountdownButton
                type="submit"
                disabled={isSubmitDisabled}
                >
                  <Play size={24} /> Começar
              </StartCountdownButton>
        }
      </form>

    </HomeContainer>
  )
}
