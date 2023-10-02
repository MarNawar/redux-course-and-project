const redux =  require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

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

function orderIceCream(qty=1){
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  }
}

function reStockIceCream(qty =1){
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  }
}

// (previousState, action)=> newState

const initialCakeState ={
  numOfCakes: 10,
}

const initialIceCreamState ={
  numOfIceCreams: 20,
}

function cakeReducer(state = initialCakeState, action){
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

function iceCreamReducer(state = initialIceCreamState, action){
  switch(action.type){
    case ICECREAM_ORDERED :
      return {
        ...state,
        numOfIceCreams : state.numOfIceCreams-1,
      }
    case ICECREAM_RESTOCKED : {
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload
      }
    }
    default :
      return {
        ...state,
      }
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
})

const store = createStore(rootReducer)

console.log('initial state', store.getState())

const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))


const actions  = bindActionCreators({orderCake,reStockCake,orderIceCream,reStockIceCream}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()

actions.reStockCake(3)

actions.orderIceCream()
actions.orderIceCream()

actions.reStockIceCream(2)


unsubscribe()