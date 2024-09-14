


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
            for(var i=0;i<state.task.length; i++)
            {
                if(state.task[i].id==action.payload)
                {
                    state.task[i].status=true
                }
            }
        },
        taskUnComplete:(state,action)=>{
            for(var i=0; i<state.task.length; i++)
            {
                if(state.task[i].id==action.payload)
                {
                    state.task[i].status=false;
                }
            }
        },
       editDataSave:(state,action)=>{
        for(var i=0; i<state.task.length; i++)
        {
            if(state.task[i].id==action.payload.id)
            {
                state.task[i].data=action.payload.data;
            }
        }
       }

    }

    
})
export default CouterSlice.reducer;
export const {increment,decrement,changecolor,addTask,recDelete,taskComplete,taskUnComplete,editDataSave}=CouterSlice.actions;