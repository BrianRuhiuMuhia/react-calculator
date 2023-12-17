import Button from "./Operator.js"
export default function Operators(props)
{
    
    const operation=["+","-","/","*","="]
    const buttons=operation.map((operator)=>{
        return <Button operation={operator} setOperator={props.setOperator} />
    })
    return (<div className="operators">
{buttons}
    </div>)
}