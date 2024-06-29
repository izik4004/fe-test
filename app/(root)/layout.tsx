"use client"

import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import MobileNav from "@/components/mobileNav/MobileNav";
import { MdClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import Image from 'next/image'
import logo from "../../public/logo.png"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <main className="">
      <div className="nav_wrapper">
        <Navbar />
      </div>

      <div className="container__wrapper">
        <div className="sidebar__wrapper">
          <Sidebar />
        </div>

        <div className="main_section">
          <div className="mobileNav">
            <div className='mobile__nav__wrapper'>
              <Image src={logo} alt='logo' width={125} height={35} />
              <div>
                <button onClick={toggleMobileNav}>
                  {mobileNavOpen ? (
                    <MdClose size={36} />
                  ) : (
                    <BiMenu size={36} />
                  )}
                </button>
               
              </div>
            </div>
            {mobileNavOpen && <MobileNav onClose={closeMobileNav} />}
          </div>
          {children}
        </div>
      </div>
    </main>
  )
}
