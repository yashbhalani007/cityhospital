import { GET_MEDICHINES } from "../ActionTypes";

const initialState = {
    isLoading: true,
    medichines: [],
    error: null
}

export const medichineReducer = (state = initialState, action) => {

    console.log(state);

    switch (action.type) {
        case GET_MEDICHINES:
            return {
                ...state,
                medichines: action.payload
            }
        default:
            return state
    }


}