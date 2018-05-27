import axios from 'axios'
import {
  AUTH_USER,
  AUTH_USER_FATCHED,
  AUTH_USER_ERROR,
  LOTTO,
  LOTTO_FATCHED,
  LOTTO_ERROR,
  BETS,
  BETS_FATCHED,
  BETS_ERROR,
  STAT,
  STAT_FATCHED,
  STAT_ERROR
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
  axios.get('/api/v1/getlotto/')
   .then((response) => {
       dispatch(writeLotto(response.data))
   })
   .catch((err)=>{
     dispatch(writeLottoError(err))
   })
});

//===============================================================================

const getBets = () => ({ type: BETS });
const writeBets = (data) => ({ type: BETS_FATCHED, payload: data });
const writeBetsError = (data) => ({ type: BETS_ERROR,  payload: data});

export const fetchBets = () =>((dispatch) =>{
  dispatch(getBets())
  axios.get('/api/v1/getbets/')
   .then((response) => {
       dispatch(writeBets(response.data))
   })
   .catch((err)=>{
     dispatch(writeBetsError(err))
   })
});
//===============================================================================
STAT,
STAT_FATCHED,
STAT_ERROR
const getStat = () => ({ type: STAT });
const writeStat = (data) => ({ type: STAT_FATCHED, payload: data });
const writeStatError = (data) => ({ type: STAT_ERROR,  payload: data});

export const fetchStat = (log) =>((dispatch) =>{
  var adress = "/api/v1/getstat/"+log;
  console.log(adress);
  dispatch(getStat(adress))
  axios.get(adress)
   .then((response) => {
     console.log(response);
       dispatch(writeStat(response.data))
   })
   .catch((err)=>{
     dispatch(writeStatError(err))
   })
});
