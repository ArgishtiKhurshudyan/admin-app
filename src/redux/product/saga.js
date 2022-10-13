import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios'

import {
  findProductFailure,
  findProductRequest,
  findProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  productCreateFailure,
  productCreateSuccess,
  productDeleteFailure,
  productDeleteStart,
  productDeleteSuccess,
  productStartCreate,
  productUpdateFailure,
  productUpdateStart,
  productUpdateSuccess
} from "./actions"

const token = localStorage.getItem('access_token')

function* createProduct({payload}) {
  try {
    const response = yield call(() => axios.post("http://localhost:5000/api/product", payload.product, {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(productCreateSuccess(response.data.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(productCreateFailure(e?.response?.data?.message));
    }
  }
}

function* deleteProduct({payload}) {
  try {
    const response = yield call(() => axios.delete(`http://localhost:5000/api/product/${payload.id}`, {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(productDeleteSuccess(payload));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(productDeleteFailure(e?.response?.data?.message));
    }
  }
}

function* updateProduct({payload}) {
  try {
    const response = yield call(() => axios.put(`http://localhost:5000/api/product/${payload.id}`, payload))
    if (response?.status === 200) {
      yield put(productUpdateSuccess(response.data.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(productUpdateFailure(e?.response?.data?.message));
    }
  }
}

function* getProducts() {
  try {
    const response = yield call(() => axios.get("http://localhost:5000/api/product/products", {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(getProductSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getProductFailure(e?.response?.data?.message));
    }
  }
}

function* findOneProduct({payload}) {
  try {
    const response = yield call(() => axios.get(`http://localhost:5000/api/product/find/${payload}`, {headers: {"authorization": `Bearer ${token}`}}))
    if (response?.status === 200) {
      yield put(findProductSuccess(response.data.product));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(findProductFailure(e?.response?.data?.message));
    }
  }
}

export default function* () {
  yield takeLatest(productStartCreate, createProduct);
  yield takeLatest(productDeleteStart, deleteProduct);
  yield takeLatest(productUpdateStart, updateProduct);
  yield takeLatest(getProductStart, getProducts);
  yield takeLatest(findProductRequest, findOneProduct);
}
