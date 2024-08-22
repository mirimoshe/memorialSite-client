import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    status: 'idle'//?
}

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (thunkAPI) => {
       
        const response = await axios.get('https://localhost:7288/api/User', { headers: { 'Authorization': `Bearer ${token}` } });
        sessionStorage.setItem('token', response.data);
        let token = localStorage.getItem('token');
       
        return response.data;
    }
)

export const postUser = createAsyncThunk(
    'Story/postUser',
    async (userObject) => {
        const response = await axios.post('https://localhost:7288/api/User', userObject)
      
        return response.data
    },
);

export const putUser = createAsyncThunk(
    'User/putUser',
    async ({id,obj}) => {
       
        const token = sessionStorage.getItem('token');
        try {
            const response = await fetch(`https://localhost:7288/api/User/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(obj)
            });
            //userData
            if (response.ok) {
                // User updated successfully
                console.log('User updated successfully');
            } else {
                // Handle error response
                console.error('Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    });

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer






