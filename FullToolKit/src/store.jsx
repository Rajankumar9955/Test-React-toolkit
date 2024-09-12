


import { configureStore } from "@reduxjs/toolkit";
import CntReducer from "./CounterSlice"
const store=configureStore({
        reducer:{
            mycounter:CntReducer,
        }
})
export default store;