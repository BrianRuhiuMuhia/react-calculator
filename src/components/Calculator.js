import "./style.css"
import Screen from "./Screen"
import ButtonPad from "./ButtonPad"
import {useState,useEffect} from 'react'
export default function Calculator()
{
    const [result,setResult]=useState(false)
    const [operator,setOperator]=useState("")
    const [prevNum,setPrevNum]=useState("")
    const [currNum,setCurrNum]=useState(0)
    useEffect(()=>{
        if(result)
        {
      setCurrNum("")
      setOperator("")
      setResult(false)
        }     
    if(operator!=="" && currNum!=="" )
    {
     if(operator==="+")
     {
        setPrevNum((prevNum)=>{
            return Number(prevNum + currNum)
        })
    }
     else if(operator==="-")
     {
        setPrevNum((prevNum)=>{
            if(prevNum==="")
            {
                return Math.abs(currNum)
            }
            return Number(prevNum - currNum)
        })
     }
  setResult(true)


        
    }
    },[operator,currNum])
 
  
    return (<div className="calculator">
<Screen prevNum={prevNum} currNum={currNum} result={result}/>
<ButtonPad setCurrNum={setCurrNum} setOperator={setOperator} operator={operator} result={result}/>
    </div>)
}