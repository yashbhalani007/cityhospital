import { SIGNUP_REQUEST } from "../ActionTypes"


export const signupRequest = (data) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST, payload: data })
}