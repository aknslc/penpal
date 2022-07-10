import React from 'react'
import users from '../user.json'


// components 
import CommunityHeader from './CommunityHeader'

function Community() {







  return (
    <div>
      <CommunityHeader />

      <div className="community-body container d-flex justify-content-around">


        {users.map(user => {
          return (

            <div className="card border-0 text-center my-5" key={user.id}>
              <img src={user.picture} className="card-img-top w-50 mx-auto" alt={user.name} />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.gender}</p>
                <button className="btn btn-outline-info">Go to Profile</button>
              </div>
            </div>

          )
        })}



      </div>

    </div>
  )
}

export default Community