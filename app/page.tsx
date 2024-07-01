"use client"


import React, { useState } from 'react'
import "./globals.scss"
import loginSvg from '../public/signin.svg';
import logo from '../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";


const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/users');

  };

  return (
    <section className=''>
      <div className='login_logo'>  <Image src={logo} alt='logo' width={125} height={35} /></div>
      <div className='login_wrapper'>
       
        <div className='login_image_container'>
         
          <div className='container_image'> <Image src={loginSvg} alt='login' /></div>
        </div>
        <div className='login_form'>
          <h3>Welcome!</h3>
          <p>Enter details to login </p>
          <form onSubmit={handleSubmit} >
            <input type="text" name="username" placeholder='email' />
            <input type="text" name="username" placeholder='password' />

            <Link href="/">
              <h5>FORGOT PASSWORD?</h5>
            </Link>
            <button>LOG IN</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Home