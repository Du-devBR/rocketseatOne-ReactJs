import { Avatar } from '../avatar/Avatar'
import style from './Sidebar.module.css'

export function Sidebar(){
  return(
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        alt=""
      />
      <div className={style['user-profile']}>
        <Avatar src="https://avatars.githubusercontent.com/u/89052479?v=4"/>
        <div className={style['user-info']}>
          <strong>Eduardo Ananias</strong>
          <span>Frontend Enginner </span>
        </div>
      </div>
      <footer className={style.footer}>
        <a href="#">Editar perfil</a>
      </footer>
    </aside>
  )
}
