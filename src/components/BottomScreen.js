import {useState,useEffect} from 'react'
export default function BottomScreen(props)
{
const [currentNum,setCurrentNum]=useState(props.currNum)
useEffect(()=>{
if(props.currNum!=="")
{
 setCurrentNum(props.currNum)   
}
},[props.currNum])
    return (
        <div className="bottom-screen view">
            <span>{currentNum}</span>
        </div>
    )
}