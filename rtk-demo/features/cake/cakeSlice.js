const {createSlice} = require('@reduxjs/toolkit')

const initialState={
  numOfCakes:10,
}
const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers:{
    ordered: (state)=>{
      state.numOfCakes--
    },
    restocked: (state,action)=>{
      state.numOfCakes+= action.payload
    }
  }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
//or

// const cakeReducer = cakeSlice.reducer
// const cakeActions = cakeSlice.actions
// module.exports = {cakeReducer, cakeActions}


// //or

// module.exports = cakeSlice.reducer
// const cakeActions = cakeSlice.actions
// module.exports = {cakeReducer, cakeActions}
