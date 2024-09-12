

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment,decrement } from "./CounterSlice";
const IncrementDecrement=()=>{
    const count=useSelector((state)=>state.mycounter.cnt+0);
    const dispatch=useDispatch();
    return(
        <>
        <div align="center" style={{marginTop:"12%"}}>
            <h1 align="center">Increment Decrement</h1>
            <h1>Count : {count}</h1>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            </div>
        </>
    )
}
export default IncrementDecrement;