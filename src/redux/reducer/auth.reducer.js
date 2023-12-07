import { AUTH_ERROR, FORGOT_REQUEST, LOGIN_REQUEST, LOGIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../ActionTypes";


const initState = {
    loading: false,
    user: null,
    error: null
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
        case SIGNUP_RESPONSE:
        case FORGOT_REQUEST:
            return {
                loading: false,
                user: null,
                error: null
            }

        case LOGIN_RESPONSE:
            return {
                loading: false,
                user: action.payload,
                error: null
            }

        case AUTH_ERROR:
            return {
                loading: false,
                user: null,
                error: action.payload
            }

        default:
            return state
    }

}