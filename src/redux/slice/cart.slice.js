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
        addtocart: (state, action) => {
            let item = state.cart.some((v) => v.id === action.payload.id)

            if (item) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id)
                state.cart[index].qty++;
            } else {
                state.cart.push(action.payload)
            }

            state.isLoading = false
            state.cart = state.cart
            state.error = null
        },

        incrementQty: (state,action) => {
            let index1 = state.cart.findIndex((v) => v.id === action.payload)

            console.log(index1);
            state.cart[index1].qty++;

            state.isLoading = false
            state.cart = state.cart
            state.error = null

        },

        decrementQty: (state,action) => {
            let index2 = state.cart.findIndex((v) => v.id === action.payload)

            if (state.cart[index2].qty > 1) {
                state.cart[index2].qty--;
            }

            state.isLoading = false
            state.cart = state.cart
            state.error = null
        },

        removeItem: (state,action) => {

            state.cart = state.cart.filter((v) => v.id !== action.payload)
            
            state.isLoading = false
            state.cart = state.cart
            state.error = null
        }

    }
})

export const { addtocart , incrementQty , decrementQty , removeItem } = cartSlice.actions

export default cartSlice.reducer;