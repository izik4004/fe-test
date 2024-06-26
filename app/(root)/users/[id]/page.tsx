import React from 'react'
import "./Userdetails.scss"
import Image from 'next/image'
import person from "../../../../public/avatar1.png"
import PersonalInfo from '@/components/user/PersonalInfo'



const page = () => {

    const data = [
        { label: 'Full Name', value: 'Grace Effiom' },
        { label: 'Phone Number', value: '07060780922' },
        { label: 'Email Address', value: 'grace@gmail.com' },
        { label: 'BVN', value: '07060780922' },
        { label: 'Gender', value: 'Female' },
        { label: 'Marital Status', value: 'Single' },
        { label: 'Children', value: 'None' },
        { label: 'Type of Residence', value: 'Parent’s Apartment' },
    ];
  return (
      <div>
          <div className='user_details'>
              
              <div className='summary'>
                  
                  <div className='initials_wrapper'>
                      <Image src={person} alt='logo' width={85} height={85} />
                      <div className='initials'>
                          <h4>Grace Effiom</h4>
                          <p>LSQF587Gio</p>
                      </div>
                  </div>
                  <div className='more_user_details'>
                      <h5>User's Tier</h5>
                      <p>LSQF587Gio</p>
                  </div>
                  <div className='more_user_details'>
                      <h4>N200,000.00</h4>
                      <p>87356289/Providus Bank</p>
                  </div>
              </div>
              <div className='other_links'>
                  <ul className='other_links_items'>
                      <li>General Details</li>
                      <li>Documents</li>
                      <li>Bank Details</li>
                      <li>Loans</li>
                      <li>Savings</li>
                      <li>App and System</li>
                  </ul>
              </div>
          </div>

          <div className='personal_info_wrapper'>
              <PersonalInfo data={data} />
           
          </div>
    </div>
  )
}

export default page