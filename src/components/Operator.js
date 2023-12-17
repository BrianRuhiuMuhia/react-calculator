import "./style.css"
export default function Operator(props)
{
    return (
        <button className="buttons" onClick={()=>{
            props.setOperator(props.operation)
        }}>
            {props.operation}
        </button>
    )
}