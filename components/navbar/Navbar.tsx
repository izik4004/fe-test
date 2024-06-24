import React from 'react'
import "./Navbar.scss"
import Image from 'next/image'
import logo from "../../public/logo.png"
import avatar from "../../public/avatar.png"
import { IoIosNotificationsOutline } from "react-icons/io";


const Navbar = () => {
  return (
    <div className="nav_bar">
      <div className='app_logo'>
        <Image src={logo} alt='logo' width={125} height={35} />
      </div>
      <div className='nav_items' >
        <div className="search_container">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search for anything"
              className="input" />
            <button className="button">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="nav_bar_activities">
          <div><h5>Docs</h5></div>
          <div><IoIosNotificationsOutline size={26} /></div>
          <div className='nav_bar_profile'>
            <Image src={avatar} width={40} height={40} alt='avatar' />
            <div>Adedeji</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar