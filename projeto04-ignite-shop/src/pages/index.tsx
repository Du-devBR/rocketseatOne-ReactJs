import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import camiseta1 from '../assets/Shirt/1.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,70</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta1} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,70</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}