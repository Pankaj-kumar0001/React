import { createSlice } from "@reduxjs/toolkit";

export const counterslice= createSlice({
    name: 'counter',
    initialState: {
        value: 0
        },
        reducers: {
            increment: (state) => {
                state.value += 1
                },

                decrement: (state)=>{
                    state.value -= 1
                
                },
                reset:(state)=>{
                    state.value=0

                },
                incrementbyamount:(state,action)=>{
                    state.value += Number(action.payload)
                }
                
            }

})

export const {increment,decrement,incrementbyamount,reset}=counterslice.actions;

export default counterslice.reducer;
