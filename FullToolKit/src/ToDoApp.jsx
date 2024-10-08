import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import  {addTask, recDelete,taskComplete,taskUnComplete,editDataSave} from "./CounterSlice"

const ToDoApp=()=>{
    const [txtval,setTxtval]=useState("");
    const [edBtn,setEdbtn]=useState(true)
    const [edId,setEdId]=useState("")
    const mydata=useSelector((state)=>state.todo.task)
    const mydis=useDispatch();

    console.log(mydata)

    let sno=0;
    const delTask=(id)=>{
        mydis(recDelete(id))
    }

    const taskComp=(id)=>{
        mydis(taskComplete(id))
    }

    const taskUnComp=(id)=>{
        mydis(taskUnComplete(id))
    }

    const dataEdit=(id,data)=>{
        setTxtval(data)
        setEdbtn(false)
        setEdId(id)
    }
    const editSave=()=>{
        mydis(editDataSave({id:edId,data:txtval}))
        setEdbtn(true)
        setTxtval("")
    }
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
              <tr>
                   <td>{sno}</td>
                   <td>
                      {key.status ? <span style={{color:"red",textDecoration:"line-through"}}>{key.data}</span>:key.data}
                   </td>
                   <td><button onClick={()=>{delTask(key.id)}}>Delete</button></td>
                   <td>
                    {key.status?(
                    <button onClick={()=>{taskUnComp(key.id)}}>UnComplete</button>
                    ):(
                        <button onClick={()=>{taskComp(key.id)}}>Complete</button>
                    )}
                   </td>
                   <td>
                    <button onClick={()=>{dataEdit(key.id,key.data)}}>Edit</button>
                   </td>
              </tr>
            </>
        )
    })
   
    return(
        <>
        
        <div align="center" style={{marginTop:"20px"}}>
            <h1>ToDoApp</h1>
            Enter Your Task : <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
          {edBtn?(
            <button onClick={()=>{mydis(addTask({id:Date.now(),data:txtval,status:false}))}}>Add</button>
          ):(
            <button onClick={editSave}>Edit Save</button>
          )}
        </div>
        <div style={{height:"400px", width:"80%",marginLeft:"180px"}}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Your Work</th>
          <th>Delete</th>
          <th>status</th>
          <th>Modify</th>
        </tr>
      </thead>
      {ans}
      </Table>


            
        </div>
        
        </>
    )
}
export default ToDoApp;