import "./style.css"
import Screen from "./Screen"
import ButtonPad from "./ButtonPad"
import {useState,useEffect} from 'react'
export default function Calculator()
{
   
    const [result,setResult]=useState(false)
    const [operator,setOperator]=useState("")
    const [prevNum,setPrevNum]=useState("")
    const [currNum,setCurrNum]=useState("")
    
    return (<div className="calculator">
<Screen prevNum={prevNum} currNum={currNum} result={result} operator={operator}/>
<ButtonPad setCurrNum={setCurrNum} setOperator={setOperator} operator={operator} result={result}/>
    </div>)
}