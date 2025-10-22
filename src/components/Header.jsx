import { button } from 'framer-motion/client'
import React from 'react'
import { BiLogOut } from 'react-icons/bi'

import './../styles/header.scss'

const Header = ({user, onLogout}) => {
  return (
    <header>
        <div className="header">
            <h1>School Emergency System</h1>
        </div>

        <div className="user-area">
            <h2>{user ? `Hello , ${user.name}`  : `Guest`}</h2>
            {user && <button onClick={onLogout}>Log out <BiLogOut/></button>}
        </div>

    </header>
  )
}

export default Header