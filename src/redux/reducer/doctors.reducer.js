import { ADD_DOCTORS, DELETE_DOCTORS, ERROR_DOCTORS, GET_DOCTORS, LOADING_DOCTORS, UPDATE_DOCTORS } from "../ActionTypes"


const initialState = {
    isLoading: false,
    doctors: [],
    error: null
}

export const doctorsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ERROR_DOCTORS:
            return {
                isLoading: false,
                doctors: [],
                error: action.payload
            }

        case LOADING_DOCTORS:
            return {
                isLoading: true,
                doctors: [],
                error: null
            }

        case GET_DOCTORS:
            return {
                isLoading: false,
                doctors: action.payload,
                error: null
            }
        case DELETE_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.filter((v) => v.id !== action.payload)
            }
        case ADD_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.concat(action.payload)
            }
        case UPDATE_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.map((v) => {
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