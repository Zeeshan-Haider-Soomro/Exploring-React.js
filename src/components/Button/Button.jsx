import './Button.css'

const Button = (props) =>{
    return(
        <button><span>{props.zhls}</span> {props.title} <img src={props.link}/></button>
    )
}
export default Button