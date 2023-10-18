import { ADD_DEPARTMENT, DELETE_DEPARTMENT, GET_DEPARTMENT, UPDATE_DEPARTMENT } from "../ActionTypes"


const initialState = {
    isLoading: true,
    department: [],
    error: null
}

export const departmentReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DEPARTMENT:
            return {
                ...state,
                department: action.payload
            }
        case DELETE_DEPARTMENT:
            return {
                ...state,
                department: state.department.filter((v) => v.id !== action.payload)
            }
        case ADD_DEPARTMENT:
            return {
                ...state,
                department: state.department.concat(action.payload)
            }
        case UPDATE_DEPARTMENT:
            return {
                ...state,
                department: state.department.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
            }
        default:
            return state
    }


}