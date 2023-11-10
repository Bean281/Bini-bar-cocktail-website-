import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            //payload is a variable is transfer
            const check = state.cart.findIndex(item => item.idDrink === action.payload.idDrink)
            
            if (check !== -1) {
                state.cart[check].quantity += action.payload.quantity
            } else {
                state.cart.push(action.payload)
            }

        },

        increaseItemQuantity: (state, action) => {
            const checkIndex = state.cart.findIndex(item => item.idDrink === action.payload.idDrink)
            state.cart[checkIndex].quantity++
        },

        decreaseItemQuantity: (state, action) => {
            const checkIndex = state.cart.findIndex(index => index.idDrink === action.payload.idDrink)
            const quantity = state.cart[checkIndex].quantity
            state.cart[checkIndex].quantity--;
            if (quantity === 1) {
                state.cart.splice(checkIndex, 1);
            } 
        },
        removeItem: (state, action) => {
            const checkIndex = state.cart.findIndex(index => index.idDrink === action.payload.idDrink)
            state.cart.splice(checkIndex, 1);
        }

        

        
    }
})

export default cartSlice.reducer;
export const {addToCart, increaseItemQuantity, decreaseItemQuantity, removeItem} = cartSlice.actions;