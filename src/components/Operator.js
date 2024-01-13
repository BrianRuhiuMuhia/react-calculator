import "./style.css"
export default function Operator(props)
{
    return (
        <button className="buttons" onClick={()=>{
            props.setOperator((operator)=>{
if(operator==="")
{
    return props.operation
}
return ""
            })
        }}>
            {props.operation}
        </button>
    )
}