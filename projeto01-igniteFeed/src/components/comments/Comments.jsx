import { useState } from 'react'
import style from './Comments.module.css'
import {BiLike, BiTrash} from 'react-icons/bi'

export function Comments({data, onDelete}){
  const [like, setLike] = useState(0)

  function handleDeleteComment(){
    onDelete(data)
  }

  return(
    <div className={style['container-comment']}>
      <img src={data.avatar} alt="" />
      <div className={style['content-comment']}>
        <div className={style['user-comment']}>
          <div className={style.comment}>
            <div className={style.user}>
              <strong>{data.name}</strong>
              <span>{data.publishedAt}</span>
            </div>
            <p>{data.message}</p>
          </div>
          <button className={style['btn-delete']} onClick={handleDeleteComment}>
            <BiTrash style={{fontSize: "1.5rem",  color: "var(---gray--400)"}} />
          </button>
        </div>
        <div className={style.interaction}>
          <BiLike style={{fontSize: "1.25rem",  color: "var(---gray--400)"}} />
          <button onClick={() => setLike(like + 1)}>aplaudir</button>
          {
            like >= 1 ?(
              <div className={style['like-count']}>
                <div className={style.dot}></div>
                <span>{like}</span>
              </div>
            ): <p></p>
          }
        </div>
      </div>
    </div>
  )
}
