import {
  AUTH_USER,
  AUTH_USER_FATCHED,
  AUTH_USER_ERROR,
  LOTTO,
  LOTTO_FATCHED,
  LOTTO_ERROR,
  BETS,
  BETS_FATCHED,
  BETS_ERROR
} from '../actions/types';



const initialState = {
  fetching: false,
  user: {},
  err: null,
  fetchingLoto: false,
  drowings: [],
  errLotto: null,
  fetchingBets: false,
  bets: null,
  errBets: null
};

export default function authUser(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER: return { ...state, fetching: true };
    case AUTH_USER_FATCHED: return { ...state, fetching: false, user: action.payload };
    case AUTH_USER_ERROR: return { ...state, fetching: false, user: {}, err: action.payload };
    case LOTTO: return { ...state, fetchingLoto: true };
    case LOTTO_FATCHED: return { ...state, fetchingLoto: false, drowings: action.payload };
    case LOTTO_ERROR: return { ...state, fetchingLoto: false, drowings: [], errLotto: action.payload };
    case BETS: return { ...state, fetchingBets: true };
    case BETS_FATCHED: return { ...state, fetchingBets: false, bets: action.payload };
    case BETS_ERROR: return { ...state, fetchingBets: false, bets: [], errBets: action.payload }
    default: return state;
  }

};
