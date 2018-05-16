import axios from 'axios'

const sendAuth = () => ({
  type: 'AUTH_USER'
});

const writeUser = (data) => ({
  type: 'AUTH_USER_FATCHED',
  payload: data
});

const writeError = (data) => ({
  type: 'AUTH_USER_ERROR',
  payload: data
});


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
