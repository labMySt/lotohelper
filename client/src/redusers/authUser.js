import {
  AUTH_USER,
  AUTH_USER_FATCHED,
  AUTH_USER_ERROR
} from '../actions/types';



const initialState = {
  fetching: false,
  user: {},
  err: null
};

export default function authUser(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER: return { ...state, fetching: true };
    case AUTH_USER_FATCHED: return { ...state, fetching: false, user: action.payload };
    case AUTH_USER_ERROR: return { ...state, fetching: false, user: {}, AUTH_USER_ERROR: action.payload };

  }
  return state;
};
