


import { configureStore } from "@reduxjs/toolkit";
import CntReducer from "./CounterSlice"
import ChangeBgColor from "./CounterSlice"
const store=configureStore({
        reducer:{
            mycounter:CntReducer,
            bgcolor:ChangeBgColor,
           
        },
       
})
export default store;