import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {cakeActions} from './cakeSlice'

function CakeView() {
  const [value, setValue] = useState(1)

  const numOfCakes = useSelector((state)=> {
    //console.log(state)
    return state.cake.numOfCakes
  })
  const dispatch = useDispatch()

  return (
    <div>CakeView
      <h2>Number of Cakes -{numOfCakes} </h2>
      <button onClick={()=>dispatch(cakeActions.ordered())}>Order Cake</button>
      <input type='number' value={value} onChange={(e)=>setValue(+e.target.value)}/>
      <button onClick={()=>dispatch(cakeActions.restocked(value))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView