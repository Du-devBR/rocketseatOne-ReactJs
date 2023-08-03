import { Avatar } from '../avatar/Avatar'
import style from './Sidebar.module.css'
import { dataUser } from '../../assets/db/dataUsers'

export function Sidebar(){
  const {name, avatar, role } = dataUser[0].author
  return(
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        alt=""
      />
      <div className={style['user-profile']}>
        <Avatar src={avatar}/>
        <div className={style['user-info']}>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
      <footer className={style.footer}>
        <a href="#">Editar perfil</a>
      </footer>
    </aside>
  )
}
