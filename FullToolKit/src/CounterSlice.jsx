


import { createSlice } from "@reduxjs/toolkit";

const CouterSlice=createSlice({
    name:"mycounter",name:"bgcolor",name:"todo",
    initialState:{
         cnt:0,
         color:"pink",
         task:[]
    },

    reducers:{
        increment:(state)=>{state.cnt=state.cnt+10;
        },

        decrement:(state)=>{
            if(state.cnt<1)
            {
               alert("No negative Decrement")
            }
            else{
                state.cnt=state.cnt-10;
            }
        },
        changecolor:(state,action)=>{
           console.log(action.payload)
           state.color=action.payload
        },
        addTask:(state,action)=>{
            state.task.push(action.payload)
        },
        recDelete:(state,action)=>{
           state.task=state.task.filter(item=>item.id!=action.payload)
        },
        taskComplete:(state,action)=>{
            
        }
    }

    
})
export default CouterSlice.reducer;
export const {increment,decrement,changecolor,addTask,recDelete}=CouterSlice.actions;