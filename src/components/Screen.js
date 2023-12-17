import TopScreen from "./TopScreen";
import BottomScreen from "./BottomScreen";
export default function Screen(props)
{
    return (
        <div className="screen">
            <TopScreen prevNum={props.prevNum} result={props.result}/>
            <BottomScreen currNum={props.currNum} result={props.result}/>
        </div>
    )
}