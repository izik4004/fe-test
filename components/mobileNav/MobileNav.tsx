import React from 'react'
import logo from "../../public/logo.png"
import Image from 'next/image'
import "./Mobilenav.scss"

const MobileNav = () => {
  return (
    <div className='mobile__nav__wrapper'>
      <Image src={logo} alt='logo' width={125} height={35} />
      <div>meee</div>
    </div>
  )
}

export default MobileNav