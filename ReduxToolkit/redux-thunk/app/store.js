import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../mypostsSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer
    }
});


export default store
