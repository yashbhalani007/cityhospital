import { combineReducers } from "redux"
import { counterReducer } from "./counter.reducer"
import { medichineReducer } from "./medichines.reducer"

export const rootReducer = combineReducers({
    counter: counterReducer,
    medicines: medichineReducer
}) 