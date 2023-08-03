import { useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import { Comments } from '../comments/Comments'
import style from './Post.module.css'

export function Post({data}){
  const [textComment, setTextComment] = useState(
    {
      id: 1,
      name: "Eduardo Ananias",
      role: "Front-end Enginner",
      avatar: "https://avatars.githubusercontent.com/u/89052479?v=4",
      message: "",
      publishedAt: "2023-08-03 12:00:00"
    }
  )

  const [comments, setComments] = useState([])

  function hendleCommentPost(event){
    event.preventDefault()
    const newComment = {
      ...textComment,
      id: comments.length + 1,
      publishedAt: new Date().toISOString()
    }
    setComments([...comments, newComment])
    setTextComment({...textComment, message: ""})
  }


  function deleteComment(commentDelete){
    const commentWithoutDelete = comments.filter(comment => {
      return comment !== commentDelete
    })

    setComments(commentWithoutDelete)

    console.log(commentDelete)

  }
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
      <form className={style['container-form']} onSubmit={hendleCommentPost}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={textComment.message}
          onChange={(event) => setTextComment({... textComment, message: event.target.value})}
          placeholder='Deixe seu comentario'
        />
        <button
          type="submit"
          >
            Publicar
        </button>
      </form>
      {
        comments.map((feedback) => (
          <Comments
            key={feedback.id}
            data={feedback}
            onDelete={deleteComment}
          />
        ))
      }
    </article>
  )
}
