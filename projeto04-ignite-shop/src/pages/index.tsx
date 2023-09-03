import {useKeenSlider} from 'keen-slider/react';

import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import camiseta1 from '../assets/Shirt/1.png'

import 'keen-slider/keen-slider.min.css'


export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides :{
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,70</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,70</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,70</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="" width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$79,70</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
