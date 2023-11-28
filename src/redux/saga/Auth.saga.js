import { all, call, put, takeEvery } from 'redux-saga/effects'
import { signupAPI } from '../../common/api/auth.api'
import { SIGNUP_REQUEST } from '../ActionTypes'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

// Watcher function
function* watchSignup() {
    yield takeEvery(SIGNUP_REQUEST, signupUser)
}

export function* authSaga() {
    yield all([
        watchSignup()
    ])
}