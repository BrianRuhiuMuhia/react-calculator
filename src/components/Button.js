export default function Button(props)
{
    return (
        <button className="buttons" onClick={()=>{
            props.setCurrNum((currNum)=>{
return props.number
            })
      
        }}>
            {props.number}
        </button>
    )
}