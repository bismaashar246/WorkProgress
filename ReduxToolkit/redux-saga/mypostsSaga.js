import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPosts } from './api';
import { fetchAllPostsPending, fetchAllPostsFulfilled, fetchAllPostsRejected } from './mypostsSlice';

export function* fetchAllPostsSaga() {
    try {
        const posts = yield call(fetchPosts);
        yield put(fetchAllPostsFulfilled(posts));
    } catch (error) {
        yield put(fetchAllPostsRejected(error.message));
    }
}

export function* watchFetchAllPosts() {
    yield takeLatest(fetchAllPostsPending.type, fetchAllPostsSaga);
}
