


import { createSlice } from "@reduxjs/toolkit";

const CouterSlice=createSlice({
    name:"mycounter",name:"bgcolor",
    initialState:{
         cnt:0,
         color:"pink"
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
        }
    }

    
})
export default CouterSlice.reducer;
export const {increment,decrement,changecolor}=CouterSlice.actions;