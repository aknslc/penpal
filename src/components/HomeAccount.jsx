import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom';


function HomeAccount() {
  const { loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    <div className='home_account'>
      
      {isAuthenticated 
      ? 
      (<div>
        <Navigate to='/community'/>
      </div>)
      :
      ( <button onClick={loginWithRedirect} className='btn btn-outline-info me-2' >Log in</button>)
    }

    </div>
  )
}

export default HomeAccount