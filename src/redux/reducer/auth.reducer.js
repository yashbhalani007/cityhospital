import { SIGNUP_REQUEST } from "../ActionTypes";


const initState = {
    loading: false,
    error: null,
    user: null
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return state;
        default:
            return state
    }

}