


import { createSlice } from "@reduxjs/toolkit";

const CouterSlice=createSlice({
    name:"mycounter",
    initialState:{
         cnt:0
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
        }
    }

    
})
export default CouterSlice.reducer;
export const {increment,decrement}=CouterSlice.actions;