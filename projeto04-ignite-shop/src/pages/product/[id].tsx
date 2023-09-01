import { useRouter } from "next/router"

export default function Product(){

  const { query } = useRouter()
  return(
    <h1>produtos: {JSON.stringify(query)}</h1>
  )
}
