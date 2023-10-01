const {createSlice} = require('@reduxjs/toolkit')

//importing to builder from extrareducer
const {cakeActions} = require('../cake/cakeSlice')


const initialState ={
  numOfIceCreams: 20
}

const iceCreamSlice = createSlice({
  name:"iceCream",
  initialState,
  reducers : {
    ordered :(state)=>{
      state.numOfIceCreams--
    },
    restocked: (state,action)=>{
      state.numOfIceCreams += action.payload;
    }
  },
  // extraReducers: {
  //   'cake/ordered' : (state)=>{
  //     state.numOfIceCreams--;
  //   }
  // }
  extraReducers:(builder)=>{
    builder.addCase(cakeActions.ordered, state=>{
      state.numOfIceCreams--
    })
  }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions