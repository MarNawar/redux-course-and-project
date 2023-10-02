import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {iceCreamActions} from './iceCreamSlice'

function IceCreamView() {
  const [value,setValue] = useState(1)
  const numOfIceCreams = useSelector((state)=>{
    return state.iceCream.numOfIceCreams
  })

  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of IceCream -{numOfIceCreams} </h2>
      <button onClick={()=>dispatch(iceCreamActions.ordered())}>Order IceCream</button>
      <input type='number' value={value} onChange={(e)=>setValue(+e.target.value)}/>
      <button onClick={()=>dispatch(iceCreamActions.restocked(value))}>Restock IceCream</button>
    </div>
  )
}

export default IceCreamView