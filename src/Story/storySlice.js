import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    stories: [],
    status: 'idle'//?
}


export const fetchStory = createAsyncThunk(
    'stories/fetchStory',
    async (thunkAPI) => {
        
        const response = await axios.get('https://localhost:7288/api/Story');
        
        return response.data;
    }
)

export const postStory = createAsyncThunk(
    'Story/postStory',
    async (storyObject) => {
        const response = await axios.post('https://localhost:7288/api/Story', storyObject)
        return response.data
    },
);


/*export const putStory = createAsyncThunk(
    'Story/putStory',
    async (id, updatedStory) => {
        const response = await axios.put(`https://localhost:7288/api/Story/${id}`, updatedStory);
        return response.data;
    },
);*/

export const putStory = createAsyncThunk(
    'Story/putStory',
    async ({ id, formData }) => {
  
        const response = await fetch(`https://localhost:7288/api/Story/${id}`, {
            method: 'PUT',
            body: formData,
        });
        const data = await response.json();
    
        return data;
    }
);

/*export const updateLikes = (id, numLikes) => ({
    type: 'UPDATE_ATTRIBUTE',
    payload: { id, numLikes },
});*/


export const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        addNewStory: (state, action) => {
            state.stories.push(action.payload);
        },
        /*updateLikes: (state, action) => {
            const { id, numLikes } = action.payload;
            state.stories = state.stories.map(obj =>
                obj.id == id ? { ...obj, likes_number: numLikes } : obj,
            );
        },*/
        updateLikes: {
            reducer: (state, action) => {
                const { id, numLikes } = action.payload;
                state.stories = state.stories.map(story => {
                    if (story.id == id) {
                        return {
                            ...story,
                            likes_number:numLikes 
                        };
                    }
                    return story;
                });
            },
            prepare: (id, numLikes) => {
                return { payload: { id, numLikes } };
            }
        },
        updateReports: {
            reducer: (state, action) => {
                const { id, numReports } = action.payload;
                state.stories = state.stories.map(story => {
                    if (story.id == id) {
                        return {
                            ...story,
                            reported_number:numReports 
                        };
                    }
                    return story;
                });
            },
            prepare: (id, numReports) => {
                return { payload: { id, numReports } };
            }
        },
        updateFavorite: {
            reducer: (state, action) => {
                const { id, numFavorite } = action.payload;
                state.stories = state.stories.map(story => {
                    if (story.id == id) {
                        return {
                            ...story,
                            favorite_number:numFavorite 
                        };
                    }
                    return story;
                });
            },
            prepare: (id, numFavorite) => {
                return { payload: { id, numFavorite } };
            }
        },
        updateEmpowering: {
            reducer: (state, action) => {
                const { id, numEmpowering } = action.payload;
                state.stories = state.stories.map(story => {
                    if (story.id == id) {
                        return {
                            ...story,
                            empowering_number:numEmpowering 
                        };
                    }
                    return story;
                });
            },
            prepare: (id, numEmpowering) => {
                return { payload: { id, numEmpowering } };
            }
        },
        updateExcited: {
            reducer: (state, action) => {
                const { id, numExciting } = action.payload;
                state.stories = state.stories.map(story => {
                    if (story.id == id) {
                        return {
                            ...story,
                            exciting_number:numExciting 
                        };
                    }
                    return story;
                });
            },
            prepare: (id, numExciting) => {
                return { payload: { id, numExciting } };
            }
        },
        updateHeroism: {
            reducer: (state, action) => {
                const { id, numHeroism } = action.payload;
                state.stories = state.stories.map(story => {
                    if (story.id == id) {
                        return {
                            ...story,
                            heroism_number:numHeroism 
                        };
                    }
                    return story;
                });
            },
            prepare: (id, numHeroism) => {
                return { payload: { id, numHeroism } };
            }
        },
        updateThanksgiving: {
            reducer: (state, action) => {
                const { id, numThanks } = action.payload;
                state.stories = state.stories.map(story => {
                    if (story.id == id) {
                        return {
                            ...story,
                            thanksgiving_number:numThanks 
                        };
                    }
                    return story;
                });
            },
            prepare: (id, numThanks) => {
                return { payload: { id, numThanks } };
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStory.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.stories = action.payload
        })
    }
})

export const { addNewStory, updateLikes,updateReports,updateFavorite ,updateEmpowering,updateExcited,updateHeroism,updateThanksgiving} = storySlice.actions
export default storySlice.reducer






