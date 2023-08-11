import logo from '../../assets/img/logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'
import {NavLink} from 'react-router-dom'

export function Header(){
  return(
    <HeaderContainer>
      <img src={logo} alt="Logotipo ignite que são representados por dois triangulos verdes inclinados a direita" />
      <nav>
        <NavLink to="/" title='Timer'>
          <Timer size={24}  />
        </NavLink>
        <NavLink to="/history" title='Historico'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
