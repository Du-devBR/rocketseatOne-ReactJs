import './Header.modules.css'
import logo from '../../assets/img/logoIgnite.svg'

export function Header(){
  return(
    <header className='container-header'>
      <img src={logo} alt="logotipo ignite cor verde" />
      <h1 className='ignite-title'>Ignite Feed</h1>
    </header>
  )
}
