const { createStore,applyMiddleware } = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default

const initialState = {
  loading:false,
  users:[],
  error:'',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

function fetchUSerRequested(){
  return {
    type: FETCH_USERS_REQUESTED,

  }
}

//const fetchUSerSucceeded=((users)=>{
//or
function fetchUSerSucceeded(users){
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  }
}
//})

function fetchUserFailed(error){
  return{
    type: FETCH_USERS_FAILED,
    payload: error,
  }
}

function reducer(state = initialState, action){
  switch ( action.type ){
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading : true,
      }
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading:false,
        users: action.payload,
        error: '',
      }
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading:false,
        users: [],
        error: action.payload,
      }
  }
}

function fetchUSers(){
  return function(dispatch){
    dispatch(fetchUSerRequested())
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      //response.data is the users
      const users = response.data.map(user=> user.id)
      dispatch(fetchUSerSucceeded(users))
    })
    .catch(error =>{
      //error.message is the error message
      dispatch(fetchUserFailed(error.message))
    })
  }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=> {console.log(store.getState())})

store.dispatch(fetchUSerRequested())
store.dispatch(fetchUSerSucceeded(['ram','sita']))


store.dispatch(fetchUSers())
