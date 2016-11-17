import { ADD_MESSAGE, RECEIVE_MESSAGE, TYPING, STOP_TYPING } from './constants';

export const initialState = {
  data: [],
  isTyping: false,
};
export default function ChatReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state,
        data: [...state.data, action.message],
      };
    case RECEIVE_MESSAGE:
      return { ...state,
        data: [...state.data, action.message],
      };
    case TYPING:
      return { ...state,
        isTyping: true,
      };
    case STOP_TYPING:
      return { ...state,
        isTyping: false,
      };
    default:
      return state;
  }
}
