import {handleActions} from 'redux-actions';

import {
  colorCreateFailure,
  colorCreateSuccess,
  colorStartCreate,
  colorDeleteStart,
  colorDeleteSuccess,
  colorDeleteFailure,
  colorUpdateStart,
  colorUpdateSuccess,
  colorUpdateFailure,
  getColorStart,
  getColorSuccess,
  getColorFailure,
  findColorRequest,
  findColorSuccess,
  findColorFailure,
} from "./actions"


const initialState = {
  isColorCreatedStart: false,
  isColorCreatedSuccess: false,
  isColorCreatedFailure: false,
  isColorDeleteStart: false,
  isColorDeleteSuccess: false,
  isColorDeleteFailure: false,
  isColorUpdateStart: false,
  isColorUpdateSuccess: false,
  isColorUpdateFailure: false,
  isColorGetStart: false,
  isColorGetSuccess: false,
  isColorGetFailure: false,
  isGettingColor: false,
  isFoundColorSuccess: false,
  isFoundColorFailure: false,
  colData: {},
  colorData: [],
  oneColor: {},
  errorMessage: '',
}

const reducer = handleActions({
    [colorStartCreate]: (state) => ({
      ...state,
      isColorCreatedStart: true,
      isColorCreatedSuccess: false,
      isColorCreatedFailure: false,
      errorMessage: ''
    }),

    [colorCreateSuccess]: (state, {payload}) => {
      return {
        ...state,
        isColorCreatedStart: false,
        isColorCreatedSuccess: true,
        isColorCreatedFailure: false,
        colorData: [...state.colorData, payload.data]
      }
    },

    [colorCreateFailure]: (state, {payload}) => {
      return {
        ...state,
        isColorCreatedStart: false,
        isColorCreatedSuccess: false,
        isColorCreatedFailure: true,
        errorMessage: payload
      }
    },

    [colorDeleteStart]: (state) => ({
      ...state,
      isColorDeleteStart: true,
      isColorDeleteSuccess: false,
      isColorDeleteFailure: false,
    }),

    [colorDeleteSuccess]: (state, {payload}) => {
      return {
        ...state,
        isColorDeleteStart: false,
        isColorDeleteSuccess: true,
        isColorDeleteFailure: false,
        colorData: state.colorData.filter(i => i.id !== payload.id)
      }
    },

    [colorDeleteFailure]: (state, {payload}) => {
      return {
        ...state,
        isColorDeleteStart: false,
        isColorDeleteSuccess: false,
        isColorDeleteFailure: true,
        errorMessage: payload
      }
    },

    [colorUpdateStart]: (state) => ({
      ...state,
      isColorUpdateStart: true,
      isColorUpdateSuccess: false,
      isColorUpdateFailure: false,
    }),

    [colorUpdateSuccess]: (state, {payload}) => {
      return {
        ...state,
        isColorUpdateStart: false,
        isColorUpdateSuccess: true,
        oneColor: payload.data,
      }
    },

    [colorUpdateFailure]: (state, {payload}) => ({
      ...state,
      isColorUpdateStart: false,
      isColorUpdateSuccess: false,
      isColorUpdateFailure: true,
      errorMessage: payload.data
    }),

    [getColorStart]: (state) => ({
      ...state,
      isColorGetStart: true,
      isColorGetSuccess: false,
      isColorGetFailure: false,
    }),

    [getColorSuccess]: (state, {payload}) => ({
      ...state,
      isColorGetStart: false,
      isColorGetSuccess: true,
      isColorGetFailure: false,
      colorData: payload.data
    }),

    [getColorFailure]: (state, {payload}) => ({
      ...state,
      isColorGetStart: false,
      isColorGetSuccess: false,
      isColorGetFailure: true,
      errorMessage: payload.data
    }),

    [findColorRequest]: (state) => ({
      ...state,
      isGettingColor: true,
      isFoundColorSuccess: false,
      isFoundColorFailure: false,
    }),

    [findColorSuccess]: (state, {payload}) => {
      return {
        ...state,
        isGettingColor: false,
        isFoundColorSuccess: true,
        oneColor: payload
      }
    },

    [findColorFailure]: (state, {payload}) => ({
      ...state,
      isGettingColor: false,
      isFoundColorFailure: true,
      errorMessage: payload
    }),
  },
  initialState
)

export default reducer;
