


import { configureStore } from "@reduxjs/toolkit";
import CntReducer from "./CounterSlice"
import BgColorChange from "./ColorChangeSlice"
const store=configureStore({
        reducer:{
            mycounter:CntReducer,
            bgchange:BgColorChange
        },
       
})
export default store;