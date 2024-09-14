


import { configureStore } from "@reduxjs/toolkit";
import CntReducer from "./CounterSlice"
import ChangeBgColor from "./CounterSlice"
import Todolist from "./CounterSlice"
const store=configureStore({
        reducer:{
            mycounter:CntReducer,
            bgcolor:ChangeBgColor,
            todo:Todolist
           
        },
       
})
export default store;