

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeColor } from "./ColorChangeSlice";
import { useState } from "react";
const ColorChange=()=>{
    const bgcolor=useSelector((state)=>state.bgcolor.color)
    const dispatch=useDispatch();
    const [val, setval]=useState("")
    return(
        <>
       <div align="center">
        <h1>Chang Background Color</h1>
        Enter Color: <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}} />
        <button onClick={()=>{dispatch(changeColor(val))}}>Change!</button>
        <div style={{height:"400px", width:"400px",border:"2px solid black"}}>{bgcolor}</div>
       </div>
        
        </>
    )
}
export default ColorChange;