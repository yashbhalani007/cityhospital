import { ADD_TO_CART } from "../ActionTypes";

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_TO_CART:

            let check = state.cart.some((v) => v.id === action.payload.id)

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                state.cart[index].qty++;
            } else {
                state.cart.push(action.payload)
            }

            return {
                isLoading: false,
                cart: action.payload,
                error: null
            }
        default:
            return state    
    }
    
}