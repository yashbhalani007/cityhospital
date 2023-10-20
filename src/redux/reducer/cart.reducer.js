import { ADD_TO_CART, DEC_CART, INC_CART } from "../ActionTypes";

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_TO_CART:

            let item = state.cart.some((v) => v.id === action.payload.id)

            if (item) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                state.cart[index].qty++;
            } else {
                state.cart.push(action.payload)
            }

            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        case INC_CART:
            let index1 = state.cart.findIndex((v) => v.id === action.payload)

            console.log(index1);
            state.cart[index1].qty++;
    
            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        case DEC_CART:
            let index2 = state.cart.findIndex((v) => v.id === action.payload)

            if (state.cart[index2].qty > 1) {
                state.cart[index2].qty--;
            }

            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }

        default:
            return state
    }

}