import { combineReducers } from "redux"
import { counterReducer } from "./counter.reducer"
import { medichineReducer } from "./medichines.reducer"
import { departmentReducer } from "./department.reducer"
import { cartReducer } from "./cart.reducer"
import { doctorsReducer } from "./doctors.reducer"

export const rootReducer = combineReducers({
    counter: counterReducer,
    medicines: medichineReducer,
    department: departmentReducer,
    cart: cartReducer,
    doctors: doctorsReducer
}) 