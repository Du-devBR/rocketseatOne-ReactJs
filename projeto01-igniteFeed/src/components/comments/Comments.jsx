import { useState } from 'react'
import style from './Comments.module.css'
import {BiLike, BiTrash} from 'react-icons/bi'
import { dataUser } from '../../assets/db/dataUsers'

export function Comments({data, onDelete}){
  const [like, setLike] = useState(0)
  const [colorLike, setColorLike] = useState(false)
  const {name} = dataUser[0].author

  function handleDeleteComment(){
    onDelete(data)
  }

  function handleCountLikeComment(){
    setLike(like + 1)
    if(name === data.name){
      setColorLike(true)
    }
  }

  console.log(colorLike)

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
        <div className={colorLike ? style['interaction-active'] : style.interaction}>
          <BiLike style={{fontSize: "1.25rem",  color: colorLike ? "var(---green--500)": "var(---gray--400)"}} />
          <button className={style['btn-like']} onClick={handleCountLikeComment}>aplaudir</button>
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
