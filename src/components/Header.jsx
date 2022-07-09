import React from 'react'
// components
import HomeAccount from './HomeAccount'

function Header() {
    return (
        <div>
            <nav className="navbar container my-3">
                <div className="container-fluid">
                    <a className="navbar-brand text-info fs-1" href="/">
                        PenPal
                    </a>

                    <HomeAccount/>
                </div>
            </nav>
        </div>
    )
}

export default Header