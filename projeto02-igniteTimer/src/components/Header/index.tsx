import logo from '../../assets/img/logo.svg'
import { HeaderContainer } from './styles'


export function Header(){
  return(
    <HeaderContainer>
      <img src={logo} alt="Logotipo ignite que são representados por dois triangulos verdes inclinados a direita" />
      <nav>
        <a href=""></a>
        <a href=""></a>
      </nav>
    </HeaderContainer>
  )
}
