import axios from 'axios'
import {
  AUTH_USER,
  AUTH_USER_FATCHED,
  AUTH_USER_ERROR,
  LOTTO,
  LOTTO_FATCHED,
  LOTTO_ERROR
} from './types';


const sendAuth = () => ({ type: 'AUTH_USER' });
const writeUser = (data) => ({ type: 'AUTH_USER_FATCHED', payload: data });
const writeError = (data) => ({ type: 'AUTH_USER_ERROR',  payload: data});

export const fetchUser = () =>((dispatch) =>{
  dispatch(sendAuth())
  axios.get('/auth/me')
   .then((response) => {
       dispatch(writeUser(response.data))
   })
   .catch((err)=>{
     dispatch(writeError(err))
   })
});
//===============================================================================

const sendLotto = () => ({ type: LOTTO });
const writeLotto = (data) => ({ type: LOTTO_FATCHED, payload: data });
const writeLottoError = (data) => ({ type: LOTTO_ERROR,  payload: data});

export const fetchLotto = () =>((dispatch) =>{
  dispatch(sendLotto())
  axios.get('/api/v1/reload/')
   .then((response) => {
     console.log( typeof response.data.drowing);
       dispatch(writeLotto(response.data.drowing))
   })
   .catch((err)=>{
     dispatch(writeLottoError(err))
   })
});
