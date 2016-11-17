import * as types from './constants';

// NOTE:Chat actions

export function addMessage(message) {
  return {
    type: types.ADD_MESSAGE,
    message,
  };
}

export function receiveRawMessage(message) {
  return {
    type: types.RECEIVE_MESSAGE,
    message,
  };
}


export function typing(username) {
  return {
    type: types.TYPING,
    username,
  };
}

export function stopTyping(username) {
  return {
    type: types.STOP_TYPING,
    username,
  };
}
