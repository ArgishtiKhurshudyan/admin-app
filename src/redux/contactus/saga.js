import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {
  messageStartCreate,
  messageCreateFailure,
  messageCreateSuccess,
} from "./actions"

function* createMessage({payload}) {
  const token = localStorage.getItem('access_token')
  try {
    const response = yield call(() => axios.post("http://localhost:5000/api/message", payload.messages, {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(messageCreateSuccess(response.data));
    } else {
      yield put(messageCreateFailure(response.data.message));
    }
    console.log("response", response)
  } catch (e) {
    if (e?.response?.data) {
      yield put(messageCreateFailure(e?.response?.data?.message));
    }
  }
}

export default function* () {
  yield takeLatest(messageStartCreate, createMessage);

}
