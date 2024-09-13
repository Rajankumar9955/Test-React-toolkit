import { createSlice } from "@reduxjs/toolkit";
const ColorChangeSlice=createSlice({
    name:"bgcolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        changeColor:(state,action)=>{
            console.log(action.payload);
            state.color=action.payload;
        }
    }
})
export default ColorChangeSlice.reducer;
export const {changeColor}=ColorChangeSlice.actions;