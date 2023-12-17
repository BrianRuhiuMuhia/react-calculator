export default function Button(props)
{
    return (
        <button className="buttons" onClick={()=>{
            props.setCurrNum(props.number)
      
        }}>
            {props.number}
        </button>
    )
}