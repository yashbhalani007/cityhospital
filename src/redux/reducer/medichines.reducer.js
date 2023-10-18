import { ADD_MEDICHINES, DELETE_MEDICHINES, GET_MEDICHINES, LOADING_MEDICHINES, UPDATE_MEDICHINES } from "../ActionTypes";

const initialState = {
    isLoading: false,
    medichines: [],
    error: null
}

export const medichineReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOADING_MEDICHINES:
            return {
                isLoading: true,
                medichines: [],
                error: null
            }

        case GET_MEDICHINES:
            return {
                isLoading: false,
                medichines: action.payload,
                error: null
            }
        case DELETE_MEDICHINES:
            return {
                ...state,
                medichines: state.medichines.filter((v) => v.id !== action.payload)
            }
        case ADD_MEDICHINES:
            return {
                ...state,
                medichines: state.medichines.concat(action.payload)
            }
        case UPDATE_MEDICHINES:
            return {
                ...state,
                medichines: state.medichines.map((v) => {
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