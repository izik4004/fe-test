import React from 'react'
import "./Sidebar.scss"
import { sidebarLinks } from '@/constants';
import Image from 'next/image'
import dashboardIcon from "../../public/dashboard.svg"
import Link from 'next/link';


const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div>
        <div>11</div>

        <div>
        <li  className='sidebar_items'>
               <Image src={dashboardIcon} alt="icon" width={25} height={20} />
            <a href="">Dashboard</a>
          </li>
        </div>
      </div>
      <h3>{sidebarLinks.section1}</h3>
      <div>
        {sidebarLinks.customersUrl.map((link, index) => (
          <Link href={link.route} key={index} className='sidebar_items'>
               <Image src={link.imgURL} alt={link.label} width={25} height={20} />
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <h3>{sidebarLinks.section2}</h3>
      <ul>
        {sidebarLinks.businessUrl.map((link, index) => (
           <li key={index} className='sidebar_items'>
            <Image src={link.imgURL} alt={link.label} width={25} height={20} />
            <a href={link.route}>{link.label}</a>
          </li>
        ))}
      </ul>
     
      <h3>{sidebarLinks.section3}</h3>
      <ul>
        {sidebarLinks.settingsUrl.map((link, index) => (
          <li key={index} className='sidebar_items'>
             <Image src={link.imgURL} alt={link.label} width={25} height={20} />
            <a href={link.route}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;