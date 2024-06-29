""
import React, { useState } from 'react'
import "./Mobilenav.scss"
;
import Sidebar from '../sidebar/Sidebar'

interface MobileNavProps {
  onClose: () => void; // Callback to close the MobileNav
}

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  return (
    <div className='mobile__nav'>

    <Sidebar/>
    </div>
  )
}

export default MobileNav