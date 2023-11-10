import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice';
const UserView = () => {

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
        <h2>List of users - </h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : <>{user.error}</>}
        {!user.loading && user.users.length ? (
          <ul>
            {user.users.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : null}
    </div>
  )
}

export default UserView;
