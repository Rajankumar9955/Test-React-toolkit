

import { useSelector,useDispatch } from "react-redux"
import { changeColor } from "./ColorChangeSlice"
import { useState } from "react"
const ColorChange=()=>{
    const bgcolor=useSelector((state)=>state.bgcolor.color) 
    const dispatch=useDispatch();
    const [val,setval]=useState("");
    return(
        <>
        <div align="center" style={{marginTop:"3%"}}>
            <h1>Change Color</h1>
            Enter color: <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}} />
            <button onClick={()=>{dispatch(changeColor(val))}}>Change Color!</button>
            <div style={{height:"400px", width:"400px",border:"2px solid black",backgroundColor:bgcolor}}>
             
            </div>
        </div>
        </>
    )
}
export default ColorChange