import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  getLoginSuccess,
  getLoginFailure,
  getLoginStart,
  getRegisterStart,
  getRegisterSuccess,
  getRegisterFailure,
} from "./actions";

function* loginUser({payload}) {
  try {
    const response = yield call(() => axios.post("http://localhost:5000/api/auth/login", payload.credentials))
    if (response?.status === 200) {
      localStorage.setItem("access_token", response.data.token)
      yield put(getLoginSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getLoginFailure(e?.response?.data?.message));
    }
  }
}

function* registerUser({payload}) {
  try {
    const response = yield call(() => axios.post("http://localhost:5000/api/auth/register", payload.user))
    if (response?.status === 200) {
      yield put(getRegisterSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getRegisterFailure(e?.response?.data?.message));
    }
  }
}


export default function* () {
  yield takeLatest(getLoginStart, loginUser);
  yield takeLatest(getRegisterStart, registerUser)
}
