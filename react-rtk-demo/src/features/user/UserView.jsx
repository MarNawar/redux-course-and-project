import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsers} from './userSlice'

function UserView() {
  const user = useSelector((state)=> {
    //console.log(state)
    return state.user
  })

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  return (
    <div>UserView
      <h2>List of Users - </h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error.length>0 ? <div>Error: {user.error}</div>: null}
      {!user.loading && user.users.length>0 ? <div>Users: 
        <ul>
          {
            user.users.map(user=>{
              return <li key = {user.id}>{user.name}</li>
            })
          }
        </ul></div>: null}
    </div>
  )
}

export default UserView