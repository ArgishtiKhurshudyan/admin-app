import {handleActions} from 'redux-actions';

import {
  productCreateFailure,
  productCreateSuccess,
  productStartCreate,
  productUpdateStart,
  productUpdateSuccess,
  productUpdateFailure,
  productDeleteStart,
  productDeleteSuccess,
  productDeleteFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure, findProductRequest, findProductSuccess, findProductFailure,
} from "./actions"


const initialState = {
  isProductCreatedStart: false,
  isProductCreatedSuccess: false,
  isProductCreatedFailure: false,
  isProductUpdatedStart: false,
  isProductUpdatedSuccess: false,
  isProductUpdatedFailure: false,
  isProductDeletedStart: false,
  isProductDeletedSuccess: false,
  isProductDeletedFailure: false,
  isProductGetStart: false,
  isProductGetSuccess: false,
  isProductGetFailure: false,
  data: [],
  errorMessage: '',
  isGettingProduct: false,
  isFoundProductSuccess: false,
  isFoundProductFailure: false,
  oneProduct: {}
}


const reducer = handleActions({
    [productStartCreate]: (state) => ({
      ...state,
      isProductCreatedStart: true,
      isProductCreatedSuccess: false,
      isProductCreatedFailure: false,
    }),

    [productCreateSuccess]: (state, {payload}) => {
      return {
        ...state,
        isProductCreatedStart: false,
        isProductCreatedSuccess: true,
        isProductCreatedFailure: false,
        data: [...state.data, payload]
      }
    },

    [productCreateFailure]: (state, {payload}) => ({
      ...state,
      isProductCreatedStart: false,
      isProductCreatedSuccess: false,
      isProductCreatedFailure: true,
      errorMessage: payload.data

    }),
    [productUpdateStart]: (state) => ({
      ...state,
      isProductUpdatedStart: true,
      isProductUpdatedSuccess: false,
      isProductUpdatedFailure: false,
    }),

    [productUpdateSuccess]: (state, {payload}) => {
      return {
        ...state,
        isProductUpdatedStart: false,
        isProductUpdatedSuccess: true,
        oneProduct: payload
      }
    },

    [productUpdateFailure]: (state, {payload}) => ({
      ...state,
      isProductUpdatedStart: false,
      isProductUpdatedSuccess: false,
      isProductUpdatedFailure: true,
      errorMessage: payload.data
    }),
    [productDeleteStart]: (state) => ({
      ...state,
      isProductDeletedStart: true,
      isProductDeletedSuccess: false,
      isProductDeletedFailure: false,
    }),

    [productDeleteSuccess]: (state, {payload}) => ({
      ...state,
      isProductDeletedStart: false,
      isProductDeletedSuccess: true,
      isProductDeletedFailure: false,
      data: state.data.filter(i => i.id !== payload.id)
    }),
    [productDeleteFailure]: (state, {payload}) => ({
      ...state,
      isProductDeletedStart: false,
      isProductDeletedSuccess: false,
      isProductDeletedFailure: true,
      errorMessage: payload.data
    }),
    [getProductStart]: (state) => ({
      ...state,
      isProductGetStart: true,
      isProductGetSuccess: false,
      isProductGetFailure: false,
    }),

    [getProductSuccess]: (state, {payload}) => {
      return {
        ...state,
        isProductGetStart: false,
        isProductGetSuccess: true,
        isProductGetFailure: false,
        data: payload?.products
      }
    },

    [getProductFailure]: (state, {payload}) => ({
      ...state,
      isProductGetStart: false,
      isProductGetSuccess: false,
      isProductGetFailure: true,
      errorMessage: payload.data
    }),
    [findProductRequest]: (state) => ({
      ...state,
      isGettingProduct: true,
      isFoundProductSuccess: false,
      isFoundProductFailure: false,
    }),
    [findProductSuccess]: (state, {payload}) => ({
      ...state,
      isGettingProduct: false,
      isFoundProductSuccess: true,
      oneProduct: payload
    }),
    [findProductFailure]: (state, {payload}) => ({
      ...state,
      isGettingProduct: false,
      isFoundProductFailure: true,
      errorMessage: payload
    }),
  },
  initialState
)

export default reducer;