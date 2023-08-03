import style from './Comments.module.css'
import {BiLike, BiTrash} from 'react-icons/bi'

export function Comments(){
  return(
    <div className={style['container-comment']}>
      <img src="https://avatars.githubusercontent.com/u/89052479?v=4" alt="" />
      <div className={style['content-comment']}>
        <div className={style['user-comment']}>
          <div className={style.comment}>
            <div className={style.user}>
              <strong>Devon Lane(voce)</strong>
              <span>Cerca de 2h</span>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
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
