import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import userReducer from './Useres/usersSlice'
import deceadReducer from './Decead/deceadSlice'
import storyReducer from './Story/storySlice'
import responseReducer from './Response/responseSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        decead: deceadReducer,
        story: storyReducer,
        response: responseReducer,

    },
})