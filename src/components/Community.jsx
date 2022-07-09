import React from 'react'
import { useAuth0, User } from '@auth0/auth0-react'

// components 
import CommunityHeader from './CommunityHeader'

function Community() {

  const { user } = useAuth0();




  return (
    <div>
      <CommunityHeader />

      <div className="community-body container d-flex justify-content-around">

      
      </div>

    </div>
  )
}

export default Community