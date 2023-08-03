import { Avatar } from '../avatar/Avatar'
import { Comments } from '../comments/Comments'
import style from './Post.module.css'

export function Post({data}){
  return(
    <article className={style['container-post']}>
      <header className={style['header-post']}>
        <div className={style['user-post']}>
          <Avatar src={data.author.avatar}/>
          <div className={style['info-user']}>
            <strong>{data.author.name}</strong>
            <span>{data.author.role}</span>
          </div>
        </div>
        <span>{data.content.publishedAt}</span>
      </header>
      <div className={style['content-message']}>
        {
          data.content.comment.map((comment) => {
            switch(comment.type){
              case 'paragraph':
                return <p>{comment.text}</p>
              case 'link':
                return <p><a href="#">{comment.text}</a></p>
            }
          })
        }
      </div>
      <form className={style['container-form']}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentario'
        />
        <button type="submit">Publicar</button>
      </form>
      {
        data.content.feedback.map((feedback) => (
          <Comments
            key={feedback.id}
            data={feedback}
          />
        ))
      }
    </article>
  )
}
