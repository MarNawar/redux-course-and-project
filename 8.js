const redux =  require('redux')
const createStore = redux.createStore
//or
// const { createStore } = require('redux')


const BUY_CAKE = 'BUY_CAKE'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderCake(){
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  }
}

function reStockCake(qty =1){
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  }
}

// (previousState, action)=> newState

const initialState ={
  numOfCakes: 10,
}

function reducer(state = initialState, action){
  switch(action.type){
    case BUY_CAKE :
      return {
        ...state,
        numOfCakes : state.numOfCakes-1,
      }
    case CAKE_RESTOCKED : {
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
      }
    }
    default :
      return {
        ...state,
      }
  }
}

const store = createStore(reducer)

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

store.dispatch(reStockCake(3))


unsubscribe()