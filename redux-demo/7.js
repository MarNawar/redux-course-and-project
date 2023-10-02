const redux =  require('redux')
const createStore = redux.createStore
//or
// const { createStore } = require('redux')



const BUY_CAKE = 'BUY_CAKE'

function buyCake(){
  return {
    type: BUY_CAKE,
    info: 'First redux action',
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
    default :
      return {
        ...state,
      }
  }
}

const store = createStore(reducer)

//console.log('initial state', store.getState())

console.log('initial state', store.getState(), ',' , store.getState().numOfCakes,' , ', store)

// const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))

console.log('updated state2', store.getState())

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

//unsubscribe()


const unsubscribe2 = store.subscribe(()=> console.log('updated state4', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())

console.log('updated state33', store.getState())
console.log('updated state34', store.getState())
console.log('updated state35', store.getState())


store.dispatch(buyCake())
store.dispatch(buyCake())


console.log('updated state36', store.getState())

unsubscribe2()








