import React from 'react'
import "./Navbar.scss"
import Image from 'next/image'
import logo from "../../public/logo.png"
import avatar from "../../public/avatar.png"
import { IoSearch } from "react-icons/io5";


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
              <IoSearch  className='search_icon' size={18}/>
            </button>
          </div>
        </div>

        <div className="nav_bar_activities">
          <div><h5>Docs</h5></div>
          {/* <div><IoIosNotificationsOutline size={26} /></div> */}
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