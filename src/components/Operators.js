import Button from "./Operator.js"
export default function Operators(props)
{
    
    const operation=["+","-","/","*","="]
    const buttons=operation.map((operator,key)=>{
        return <Button operation={operator} key={key} setOperator={props.setOperator} />
    })
    return (<div className="operators">
{buttons}
    </div>)
}