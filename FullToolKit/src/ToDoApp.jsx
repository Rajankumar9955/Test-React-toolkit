
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import  {addTask, recDelete} from "./CounterSlice"

const ToDoApp=()=>{
    const [txtval,setTxtval]=useState("");
    const mydata=useSelector((state)=>state.todo.task)
    const mydis=useDispatch();

    console.log(mydata)

    let sno=0;
    const delTask=(id)=>{
        mydis(recDelete(id))
    }
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
              <tr>
                   <td>{sno}</td>
                   <td>
                      {key.data}
                   </td>
                   <td><button onClick={()=>{delTask(key.id)}}>Delete</button></td>
              </tr>
            </>
        )
    })
   
    return(
        <>
        
        <div align="center" style={{marginTop:"20px"}}>
            <h1>ToDoApp</h1>
            Enter Your Task : <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>

            <button onClick={()=>{mydis(addTask({id:Date.now(),data:txtval}))}}>Add</button>

        </div>
        <table border="2px" style={{width:"100%",gap:"10px",border:"1px solid black"}}>
            <tr style={{border:"1px solid black"}}>
                <th >Sno</th>
                <th>Work</th>
                <th>Delete</th>
                <th>Status</th>
                <th>Edit</th>
            </tr>
            {ans}
        </table>
        
        </>
    )
}
export default ToDoApp;