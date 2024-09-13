

import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "./ColorChangeSlice";
import { useState } from "react";
const ColorChange=()=>{
  const bgcolor=useSelector((state)=>state.bgcolor.color)
  const dispatch=useDispatch();
  const [val,setVal]=useState("");

  return(
    <>
    
    <div align="center" style={{marginTop:"80px"}}>
    Enter Color:<input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
    <button onClick={()=>{dispatch(changeColor(val))}}>Change color</button>
    <div style={{width:"400px",height:"400px",backgroundColor:bgcolor}}></div>
    </div>
    </>
  )
}
export default ColorChange;