

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changecolor } from "./CounterSlice";
import { useState } from "react";
const ColorChange=()=>{
const bgcolor=useSelector((state)=>state.bgcolor.color)
const dispatch=useDispatch()
const [val,setval]=useState("")

  return(
    <>
    <div align="center">
        <h1>Change Color whatever you want!</h1>
        Enter Color: <input type="text" value={val} onChange={(e)=>{setval(e.target.value)}} />
        <button onClick={()=>{dispatch(changecolor(val))}}>Change!</button>
        <div style={{height:"400px", width:"400px",border:"2px solid black",backgroundColor:bgcolor}}>
   {bgcolor}
        </div>
    </div>
    
    
    </>
  )
}
export default ColorChange;