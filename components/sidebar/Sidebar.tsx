
"use client"

// Sidebar.tsx
import React from 'react';
import './Sidebar.scss';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dashboardIcon from '../../public/dashboard.svg';
import { sidebarLinks,  } from '@/constants';
import { SidebarLink} from '../../Types/index';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const renderLinks = (links: SidebarLink[], isActive: (route: string) => boolean) => (
    <ul>
      {links.map((link, index) => (
        <li key={index} className={`sidebar_items ${isActive(link.route) ? 'active' : ''}`}>
          <Link href={link.route} className='sidebar_items'>
            <Image src={link.imgURL} alt={link.label} width={25} height={20} />
            <p>{link.label}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  const isActive = (route: string) => pathname === route || pathname.startsWith(`${route}/`);

  return (
    <div className="sidebar">
      <div className="sidebar_items">
        <Link href="/" className='sidebar_items'>
          <Image src={dashboardIcon} alt="Dashboard" width={25} height={20} />
          <p>Dashboard</p>
        </Link>
      </div>
      <div className='sidebarLink_title_text'><h3>{sidebarLinks.customers}</h3></div>
      {renderLinks(sidebarLinks.customersUrl, isActive)}
      <div className='sidebarLink_title_text'><h3>{sidebarLinks.businesses}</h3></div>
      {renderLinks(sidebarLinks.businessUrl, isActive)}
      <div className='sidebarLink_title_text'><h3>{sidebarLinks.settings}</h3></div>
      {renderLinks(sidebarLinks.settingsUrl, isActive)}
    </div>
  );
};

export default Sidebar;
