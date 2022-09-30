import {createAction} from 'redux-actions';

export const messageStartCreate = createAction(
  "MESSAGE_START_CREATE"
)

export const messageCreateSuccess = createAction(
  "MESSAGE_CREATE_SUCCESS"
)

export const messageCreateFailure = createAction(
  "MESSAGE_CREATE_FAILURE"
)
