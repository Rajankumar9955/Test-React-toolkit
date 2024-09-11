
import { configureStore } from "@reduxjs/toolkit";
import CntReducer from "./ColorSlice";
const  store=configureStore({
    reducer:{
        bgcolor:CntReducer,
    }
})
export default store;