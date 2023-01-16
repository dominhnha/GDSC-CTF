import { configureStore } from '@reduxjs/toolkit'
import Userslice from '../slices/Userslice'

const store = configureStore({
    reducer:{
        User: Userslice.reducer,
    }
})
export default store