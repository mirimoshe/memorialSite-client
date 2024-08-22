import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    deceads: [],
    status: 'idle'//?
}

export const fetchDecead = createAsyncThunk(
    'deceads/fetchDecead',
    async (thunkAPI) => {
        const response = await axios.get('https://localhost:7288/api/Deceasd');
        /*let d = response.data;
        for (let index = 0; index < d.length; index++) {
            const img = d[index].images;
            if (img != 'undefined') {
                let arr = [];
                for (let i = 0; i < d[index].images.length; i++) {
                    let sentImg = img[i];
                    const picture = await axios.get(`https://localhost:7288/api/Deceasd/GetImage/${sentImg}`);
                    arr.push(picture.data);
                }
                d[index] = { ...d[index], ArrayImage: arr };
            }

        }*/
        return response.data;
    }

)

export const postDecead = createAsyncThunk(
    'deceased/postDecead',
    async (deceasedObject) => {
        //const response = await axios.post('https://localhost:7288/api/Deceasd', deceasedObject)
        const response = await axios.post('https://localhost:7288/api/Deceasd',
            deceasedObject,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'enctype': 'multipart/form-data'
                }
            }
        )
        return response.data
    },
);

export const putDecead = createAsyncThunk(
    'deceased/putDecead',
    async ({ id, formData }) => {
        const response = await fetch(`https://localhost:7288/api/Deceasd/${id}`, {
            method: 'PUT',
            body: formData,
        });

        const data = await response.json();
        return data;
    }
);





export const addImageToObj = (objectId, imageUrl) => {
    return {
        type: 'ADD_IMAGE_TO_OBJECT',
        payload: { objectId, imageUrl }
    };
};

export const deceadSlice = createSlice({
    name: 'decead',
    initialState,
    reducers: {
       
        addNewDecead: (state, action) => {
            state.deceads.push(action.payload);
            
        },
        addImageToObject: {
            reducer: (state, action) => {
                const { objectId, imageUrl } = action.payload;
                state.deceads = state.deceads.map(decead => {
                    if (decead.id == objectId) {
                        return {
                            ...decead,
                            imagesUrl: [...decead.imagesUrl, imageUrl]
                        };
                    }
                    return decead;
                });
            },
            prepare: (objectId, imageUrl) => {
                return { payload: { objectId, imageUrl } };
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDecead.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.deceads = action.payload
        })
    }
})

export const { addNewDecead, addImageToObject } = deceadSlice.actions
export default deceadSlice.reducer




/*
           
       }*/

