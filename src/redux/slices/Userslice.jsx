import { createSlice } from '@reduxjs/toolkit'


const Userslice = createSlice({
    name: 'User',
    initialState: {
        username: 'Minh nHat',
        password: '',   
    },
    reducers: {
        setUser(state, action) {
            console.log(state, action)
            state.password = action.payload.password
            state.username = action.payload.username
        },
    },
})
export const {setUser} = Userslice.actions

export default Userslice
