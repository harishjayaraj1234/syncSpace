import {createSlice} from '@reduxjs/toolkit'


const initialState = {
            displayName : null,
            email : null,
            photoURL : null,
            uid : null

        }



const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state, action){
            const {displayName, email, photoURL, uid} = action.payload
            state.displayName = displayName,
            state.email = email,
            state.photoURL = photoURL,
            state.uid = uid
        },
        clearUser(state){
            state.displayName = null,
            state.email = null,
            state.photoURL = null,
            state.uid = null

        }
    }

})

export const {setUser, clearUser} = userSlice.actions
export default userSlice.reducer