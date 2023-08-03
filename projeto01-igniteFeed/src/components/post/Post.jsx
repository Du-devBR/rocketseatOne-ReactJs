import { useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import { Comments } from '../comments/Comments'
import style from './Post.module.css'
import ptBR, {} from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

export function Post({data, onPublished}){
  const [buttonVisible, setButtonVisible] = useState(false)
  const publishedAtDateRelativeNow = formatDistanceToNow(onPublished, {
    locale: ptBR,
    addSuffix: true
  })
  const [comments, setComments] = useState([])
  const [textComment, setTextComment] = useState(
    {
      id: 1,
      name: "Eduardo Ananias",
      role: "Front-end Enginner",
      avatar: "https://avatars.githubusercontent.com/u/89052479?v=4",
      message: "",
      publishedAt: new Date()
    }
  )

  function hendleCommentPost(event){
    event.preventDefault()
    const newComment = {
      ...textComment,
      id: comments.length + 1,
      publishedAt: new Date()
    }
    setComments([...comments, newComment])
    setTextComment({...textComment, message: ""})
    setButtonVisible(false)
  }


  function deleteComment(commentDelete){
    const commentWithoutDelete = comments.filter(comment => {
      return comment !== commentDelete
    })
    setComments(commentWithoutDelete)

  }

  function handleVisibilityButton(){
    if(textComment.message.length >= 1){
      setButtonVisible(true)
    }else {
      setButtonVisible(false)
    }

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
        <span>{publishedAtDateRelativeNow}</span>
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
          onKeyUp={handleVisibilityButton}
          placeholder='Deixe seu comentario'
        />
        {
          buttonVisible ? (
            <button
              type="submit"
              >
                Publicar
            </button>
          ): ""
        }
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
