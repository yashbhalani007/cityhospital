import { all, call, put, takeEvery } from 'redux-saga/effects'
import { loginAPI, signupAPI } from '../../common/api/auth.api'
import { LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_REQUEST } from '../ActionTypes'
import { authError, loginResponse, signupResponse } from '../action/auth.action'
import { setAlert } from '../slice/alert.slice'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
    try {
        const user = yield call(signupAPI, action.payload)
        yield put(signupResponse( user.user ))
        yield put(setAlert({ text: user.message, color: 'success'}))
    } catch (e) {
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error'}))
    }
}

function* loginUser(action) {
    try {
        const user = yield call(loginAPI, action.payload)
        yield put(loginResponse(user.user))
        console.log(user);
        yield put(setAlert({ text: user.message, color: 'success'}))
    } catch (e) {
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error'}))
    }
}

function* logoutUser(action) {
    try {
        const user = yield call(loginAPI, action.payload)
        yield put(loginResponse(user.user))
        console.log(user);
        yield put(setAlert({ text: user.message, color: 'success'}))
    }catch (e) {
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error'}))
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

function* watchLogin() {
    yield takeEvery(LOGIN_REQUEST, loginUser)
}

function* watchLogout() {
    yield takeEvery(LOGOUT_REQUEST, logoutUser)
}



export function* authSaga() {
    yield all([
        watchSignup(),
        watchLogin(),
        watchLogout()
    ])
}