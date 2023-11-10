import { createSlice } from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    //step 2: add a name for this slide
    //we pass in an object as an argument
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIcecreams--;
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    //2 ways to specify extra reducer
    //1st way: specify the mapping object where the key corresponds to an action type from a different slice
    // extraReducers: {
    //     ['cake/ordered'] :  (state) => {
    //         state.numOfIcecreams--;
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--;
        })
    }
})

export default icecreamSlice.reducer
export const {ordered, restocked, extraReducers} = icecreamSlice.actions