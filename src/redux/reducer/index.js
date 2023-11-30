import { combineReducers } from "redux"
import { medichineReducer } from "./medichines.reducer"
import { departmentReducer } from "./department.reducer"
import { doctorsReducer } from "./doctors.reducer"
import counterReducer from "../slice/counter.slice"
import  cartReducer from "../slice/cart.slice"
import alertSlice from "../slice/alert.slice"



export const rootReducer = combineReducers({
    counter: counterReducer,
    medicines: medichineReducer,
    department: departmentReducer,
    cart: cartReducer,
    doctors: doctorsReducer,
    alert: alertSlice
}) 