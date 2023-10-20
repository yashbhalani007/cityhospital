import { ADD_TO_CART } from "../ActionTypes"

export const addToCart = (id) => (dispatch) => {
    dispatch({ type: ADD_TO_CART ,payload: {id: id, qty: 1}})
}