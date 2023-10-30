import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart: (state ,action) => {
            let item = state.cart.some((v) => v.id === action.payload.id)

            if (item) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                state.cart[index].qty++;
            } else {
                state.cart.push(action.payload)
            }

            state.cart = state.cart
        }
    }
})

export const { addtocart } = cartSlice.actions

export default cartSlice.reducer;