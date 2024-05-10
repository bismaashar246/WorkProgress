
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from './api';

export const fetchAllPosts = createAsyncThunk('posts/fetchAllPosts', async () => {
    const posts = await fetchPosts();
    return posts;
});

const initialState = {
    posts: [],
    status: 'idle',
    error: null
};

const mypostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchAllPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default mypostsSlice.reducer;
