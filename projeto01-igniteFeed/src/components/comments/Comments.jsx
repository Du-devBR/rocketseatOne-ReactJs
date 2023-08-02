import style from './Comments.module.css'

export function Comments(){
  return(
    <div className={style['container-comment']}>
      <img src="" alt="" />
      <div>
        <div>
          <div>
            <div>
              <strong>Devon Lane(voce)</strong>
              <span>cerca de 2h</span>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          X
        </div>
        <div>
          <span>like</span>
          <span>aplaudir</span>
          <span>.</span>
          <span>03</span>
        </div>
      </div>
    </div>
  )
}
