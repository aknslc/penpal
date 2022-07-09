import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { TiMessages } from 'react-icons/ti'
import { TbUsers } from 'react-icons/tb'


function CommunityHeader() {
    const { logout, user } = useAuth0();
    return (
        <div>
            <div className="community-header d-flex container justify-content-between my-3">
                <div className="left">
                    <a href='/community' className='text-info fs-1 navbar-brand'>PenPal</a>
                </div>

                <div className="right d-flex align-items-center justify-content-center">
                    <div className="">

                        <div className='d-flex flex-column align-items-center me-4 position-relative text-info'>
                            <TbUsers size={30} className="community-icons" />
                            Community
                        </div>

                    </div>
                    <div className="">

                        <div className='d-flex flex-column align-items-center me-4   position-relative text-info'>
                            <TiMessages size={30} className="community-icons" />
                            Messages
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                +2
                            </span>
                        </div>

                    </div>
                    <div className="avatar">
                        <div className="btn-group">
                            <img src={user.picture} className="rounded-circle w-50" data-bs-toggle="dropdown" aria-expanded="false" alt={user.name} />
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item">Profile</a></li>
                                <li><a className="dropdown-item">Settings</a></li>
                                <li><a className="dropdown-item">Terms and Conditions</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button onClick={logout} className="dropdown-item">Logout</button></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CommunityHeader