import { createSlice } from '@reduxjs/toolkit';

export const mypostsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null
    },
    reducers: {
        fetchAllPostsPending: (state) => {
            state.status = 'loading';
        },
        fetchAllPostsFulfilled: (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        },
        fetchAllPostsRejected: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
});

export const { fetchAllPostsPending, fetchAllPostsFulfilled, fetchAllPostsRejected } = mypostsSlice.actions;

export default mypostsSlice.reducer;
