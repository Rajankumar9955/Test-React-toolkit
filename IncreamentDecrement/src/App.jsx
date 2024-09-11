import { useSelector,useDispatch } from "react-redux"
import { decrement,increment } from "./CounterSlice"
 const App=()=>{
 
     const count=useSelector((state)=>state.mycounter.cnt+10)
     const dispatch=useDispatch();

    return(
        
        <>
        <h1>count:{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>Increamet</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

        

        
        </>
    )
}
export default App