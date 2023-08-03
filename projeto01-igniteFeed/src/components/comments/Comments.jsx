import style from './Comments.module.css'
import {BiLike, BiTrash} from 'react-icons/bi'

export function Comments({data}){
  return(
    <div className={style['container-comment']}>
      <img src={data.authorFeedback.avatar} alt="" />
      <div className={style['content-comment']}>
        <div className={style['user-comment']}>
          <div className={style.comment}>
            <div className={style.user}>
              <strong>{data.authorFeedback.name}</strong>
              <span>{data.authorFeedback.publishedAt}</span>
            </div>
            <p>{data.authorFeedback.message}</p>
          </div>
          <button className={style['btn-delete']}>
            <BiTrash style={{fontSize: "1.5rem",  color: "var(---gray--400)"}} />
          </button>
        </div>
        <div className={style.interaction}>
          <BiLike style={{fontSize: "1.25rem",  color: "var(---gray--400)"}} />
          <span>aplaudir</span>
          <div className={style['like-count']}>
            <div className={style.dot}></div>
            <span>03</span>
          </div>
        </div>
      </div>
    </div>
  )
}
