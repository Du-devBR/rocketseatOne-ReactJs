import { Avatar } from '../avatar/Avatar'
import { Comments } from '../comments/Comments'
import style from './Post.module.css'

export function Post(){
  return(
    <article className={style['container-post']}>
      <header className={style['header-post']}>
        <div className={style['user-post']}>
          <Avatar />
          <div className={style['info-user']}>
            <strong>Jane Cooper</strong>
            <span>Dev frontend</span>
          </div>
        </div>
        <span>Publicado há 1h</span>
      </header>
      <div className={style['content-message']}>
        <p>Lorem, ipsum.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam perferendis culpa est. Ratione ut sint nihil sapiente autem rerum iure.</p>
        <p><a href="#">👉 jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>
      <form className={style['container-form']}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentario'
        />
        <button type="submit">Publicar</button>
      </form>
      <Comments />
      <Comments />
    </article>
  )
}
