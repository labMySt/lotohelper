

const todos = (state = initialState, action)=>{
  switch(action.type){
    case "AUTH_USER":
      return CreateState(state, {fetching: true});
    case "AUTH_USER_ERROR":
      return CreateState(state, {fetching: false, err: action.payload });
    case "AUTH_USER_FATCHED":
      return CreateState(state, {fetching: false, user: action.payload });

  }
  return state;
}

export default todos;
