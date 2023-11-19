import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        resetCounter: (state) => {
            state.value = 0
        }
    }
})

export const { increment, decrement, resetCounter } = CounterSlice.actions;
export default CounterSlice.reducer