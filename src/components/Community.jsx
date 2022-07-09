import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
// components 
import Header from './Header';

function Community() {

    const { logout, user } = useAuth0();

  return (
    <div>
        
        <p>{user.nickname}</p>
        <button onClick={logout} className='btn btn-outline-info me-2' >Log Out</button>
    </div>
  )
}

export default Community