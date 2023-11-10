import { configureStore } from '@reduxjs/toolkit'

// const reduxLoger = require('redux-logger')
import cakeReducer from '../redux/features/cake/cakeSlice'
import icecreamReducer from './features/icecream/icecreamSlice'
import userReducer from './features/user/userSlice'
import cartReducer from './features/cart/cartSlice'

// const logger = reduxLoger.createLogger()
// to apply this logger middleware, we specify the middleware property after reducer in configure store


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
        cart: cartReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    //in the function body, we implicitly return get default middleware
    //and concatenate the list with our logger middleware --> we do this because by default the configure store function 
    //adds some middleware to the redux store setup automatically
})

export default store;
//create a logger for application