import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count: 0
}

export const counterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers: {
        Increment: (state,action) => {
            state.count += 1
        },
        Decrement: (state,action) => {
            state.count -= 1
        }
    }
})

export const { Increment,Decrement } = counterSlice.actions

export default counterSlice.reducer;