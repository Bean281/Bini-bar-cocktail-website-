import { createSlice } from '@reduxjs/toolkit'  
import { ordered as icecreamOrder } from '../icecream/icecreamSlice'

    //2nd: specify the initial state for this individual state
const initialState = {
    numofCakes: 10
}

const cakeSlice = createSlice({
    //1st we specify a name for this slice
    name: "cake",
    //specify initial state as key and value --> we can use esx shorthand and specify just initial key and value both are the same
    initialState,
    //3rd: specify the reducer function, adding a key called reducers (this is an object)
    reducers: {
        //specify "ordered" as a key --> this going to be a function which receive state and action as argument
        ordered: (state) => {
            //the function we are simply decrementing the number of cakes by 1
            //in redux toolkit :
            //1. we don't have to explicity return the new state
            //2. we can directly mutate(bien doi) the state
            state.numofCakes--
        },

        restocked: (state, action) => {
            //we increment the number of cakes by the amount specified in the action payload value
            state.numofCakes += action.payload
        }

    },

    extraReducers: (builder) => {
        builder.addCase(icecreamOrder, (state) => {
            state.numofCakes--;
        })
    }


})

//export the reducer as the default export
export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions

    