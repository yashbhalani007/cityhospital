import { all, call, put, takeEvery } from 'redux-saga/effects'
import { loginAPI, signupAPI } from '../../common/api/auth.api'
import { LOGIN_REQUEST, SIGNUP_REQUEST } from '../ActionTypes'
import { authError, loginRequest, loginResponse, signupResponse } from '../action/auth.action'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        yield put(signupResponse( user.user ))
    } catch (e) {
        yield put(authError(e.message))
    }
}

function* loginUser(action) {
    try {
        const user = yield call(loginAPI, action.payload)
        yield put(loginRequest(user.user))
        console.log(user);
    } catch (e) {
        yield put(authError(e.message))
        console.log(e);
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

function* watchSignin() {
    yield takeEvery(LOGIN_REQUEST, loginUser)
}



export function* authSaga() {
    yield all([
        watchSignup(),
        watchSignin()
    ])
}