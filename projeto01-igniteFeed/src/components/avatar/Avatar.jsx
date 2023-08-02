import style from  './Avatar.module.css'

export function Avatar(props){
  return(
    <div className={style.avatar}>
      <img src={props.src} alt="" />
    </div>
  )
}
