

import { createSlice } from "@reduxjs/toolkit";
const CounterSlice=createSlice({
    name:"mycounter",
    initialState:{
        cnt:0
    },
    reducers:{
        increment:(state)=>{state.cnt=state.cnt+10;
        },

        decrement:(state)=>{
            
            if(state.cnt<=-1)
            {
                alert("no negative decrement")
            }
            else{
                state.cnt=state.cnt-10
            }
            
        }
        
    }
})
export default CounterSlice.reducer;
export const{increment,decrement}=CounterSlice.actions;