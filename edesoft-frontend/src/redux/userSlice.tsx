import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {UserType} from '../components/User';

export interface UserState {
    users: UserType[]
}

const initialState: UserState = {
    users: []
}


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserType[]>) => {
            state.users = action.payload
        }
    }
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer