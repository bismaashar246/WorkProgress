import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import mypostsReducer from '../mypostsSlice';
import { watchFetchAllPosts } from '../mypostsSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        posts: mypostsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(watchFetchAllPosts);

export default store;
