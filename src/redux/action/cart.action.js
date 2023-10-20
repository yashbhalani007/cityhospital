import { ADD_TO_CART, DEC_CART, INC_CART, REMOVE_ITEM } from "../ActionTypes"

export const addToCart = (id) => (dispatch) => {
    dispatch({ type: ADD_TO_CART ,payload: {id: id, qty: 1}})
}

export const incrementQty = (id) => (dispatch) => {
    console.log(id);
    dispatch({ type: INC_CART ,payload: id})
}

export const decrementQty = (id) => (dispatch) => {
    dispatch({ type: DEC_CART ,payload: id})
}

export const removeItem = (id) => (dispatch) => {
    dispatch({ type: REMOVE_ITEM ,payload: id})
}