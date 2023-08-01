import './Avatar.modules.css'

export function Avatar(props){
  return(
    <div className='avatar'>
      <img src={props.src} alt="" />
    </div>
  )
}
