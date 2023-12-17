import Button from "./Button.js"
import Operators from "./Operators.js"
export default function ButtonPad(props)
{
    const numbers=[1,2,3,4,5,6,7,8,9,0]
  
    const buttons=numbers.map((number)=>{
        return <Button number={number} setCurrNum={props.setCurrNum} setOperator={props.setOperator}/>
    })
    return (<div className="button-pad">
{buttons}
<Operators setOperator={props.setOperator} operator={props.operator}/>
    </div>)
}