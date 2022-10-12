import {handleActions} from 'redux-actions';


import {
  messageStartCreate,
  messageCreateFailure,
  messageCreateSuccess,
} from "./actions"


const initialState = {
  isMessageCreatedStart: false,
  isMessageCreatedSuccess: false,
  isMessageCreatedFailure: false,
  messageData: [],
  errorMessage: '',
  messageSuccess: ''
}

const reducer = handleActions({
    [messageStartCreate]: (state) => ({
      ...state,
      isMessageCreatedStart: true,
      isMessageCreatedSuccess: false,
      isMessageCreatedFailure: false,
    }),

    [messageCreateSuccess]: (state, {payload}) => {
      return {
        ...state,
        isMessageCreatedStart: false,
        isMessageCreatedSuccess: true,
        isMessageCreatedFailure: false,
        messageData: [...state.messageData, payload.data],
        messageSuccess: payload.message

      }
    },

    [messageCreateFailure]: (state, {payload}) => ({
      ...state,
      isMessageCreatedStart: false,
      isMessageCreatedSuccess: false,
      isMessageCreatedFailure: true,
      errorMessage: payload
    }),
  },
  initialState
)

export default reducer;