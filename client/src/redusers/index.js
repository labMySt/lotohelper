import { combineReducers } from 'redux';
import gettingLoto from './gettingLoto';
import todos from './todos';
import authUser from './authUser';
import gettingLoto from './gettingLoto';

const rootReduser = combineReducers({
  gettingLoto
})
export default rootReduser;
