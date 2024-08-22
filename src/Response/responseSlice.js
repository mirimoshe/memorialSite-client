import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    responses: [],
    status: 'idle'//?
}

export const fetchResponse=createAsyncThunk(
    'responses/fetchResponse',
    async(thunkAPI)=>{
        
        const response=await axios.get('https://localhost:7288/api/Response');
        
        return response.data;
    }
)

export const postResponse = createAsyncThunk(
    'Response/postResponse',
    async (responseObject) => {
       
        const response = await axios.post('https://localhost:7288/api/Response',responseObject)
        
        return response.data
    },
);

export const responseSlice=createSlice({
    name:'response',
    initialState,
    reducers:{
        addResponse: (state, action) => {
            state.responses.push(action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchResponse.fulfilled,(state,action)=>{
            state.status='fulfilled'
            state.responses=action.payload
        })
    }
})

export const {addResponse}=responseSlice.actions
export default responseSlice.reducer






