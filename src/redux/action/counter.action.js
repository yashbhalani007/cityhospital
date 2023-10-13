import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionTypes"

export const Increment = () => (dispatch) => {
    dispatch({type: INCREMENT_COUNTER})
}

export const Decrement = () => (dispatch) => {
    dispatch({type: DECREMENT_COUNTER})
}