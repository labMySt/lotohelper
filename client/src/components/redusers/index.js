import { combineReducers } from 'redux';
import gettingLoto from './gettingLoto';
import todos from './todos';
import authUser from './authUser';
​
const rootReduser = combineReducers({
  gettingLoto,
  todos,
  authUser
})
​
export default rootReduser;
