import style from './Header.module.css'
import logo from '../../assets/img/logoIgnite.svg'

export function Header(){
  return(
    <header className={style['container-header']}>
      <img src={logo} alt="logotipo ignite cor verde" />
      <h1 className={style['ignite-title']}>Ignite Feed</h1>
    </header>
  )
}
