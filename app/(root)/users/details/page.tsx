"use client"
import React, { useEffect, useState } from 'react'
import "./Userdetails.scss"
import Image from 'next/image'
import person from "../../../../public/avatar1.png"
import PersonalInfo from '@/components/user/PersonalInfo'
import { User } from '@/Types'



const page = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('selectedUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }
    const education = user.education
    console.log(education)
    // console.log(user)
    const profileData = [
        { label: 'Organization', value: user.profile.organization },
        { label: 'Email', value: user.profile.email },
        { label: 'Phone', value: user.profile.phone },
        { label: 'Date of Birth', value: user.profile.dob },
        { label: 'Gender', value: user.profile.gender },
        { label: 'Marital Status', value: user.profile.marital_status },
        { label: 'Type of Residence', value: user.profile.type_of_residence },
        { label: 'Children', value: user.profile.children },
        { label: 'Bank', value: `${user.profile.bank} (${user.profile.account_number})` },
        { label: 'Address', value: user.profile.address },
    ];

    // Prepare data for education section
    const educationData = [
        { label: 'Level', value: user.education.level },
        { label: 'Employment Status', value: user.education.employement_status },
        { label: 'Employment Sector', value: user.education.employment_sector },
        { label: 'Duration of Employment', value: `${user.education.duration_of_employement} years` },
        { label: 'Loan Repayment', value: `N${user.education.loan_repayment}` },
    ];

    const socialData = [
        { label: 'Twitter', value: user.socials.twitter },
        { label: 'Facebook', value: user.socials.facebook },
        { label: 'Instagram', value: user.socials.instagram },
    ];

    const guarantorData = [
        { label: 'Name', value: user.guarantor.name },
        { label: 'Email', value: user.guarantor.email },
        { label: 'Phone Number', value: user.guarantor.phone },
        { label: 'Relationship', value: user.guarantor.relationship},
        
    ];
  return (
      <div>
          <div className='user_details'>
              
              <div className='summary'>
                  
                  <div className='initials_wrapper'>
                      <Image src={person} alt='logo' width={85} height={85} />
                      <div className='initials'>
                          <h4>{user.profile.name}</h4>
                          <p>LSQF587Gio</p>
                      </div>
                  </div>
                  <div className='more_user_details'>
                      <h5>User's Tier</h5>
                      <p>LSQF587Gio</p>
                  </div>
                  <div className='more_user_details'>
                      <h4>N200,000.00</h4>
                      <p><span>{user.profile.account_number}</span>/<span>{user.profile.bank}</span></p>
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
              <div className='section'>
                  <h3>Personal Information</h3>
                  <PersonalInfo data={profileData} />
              </div>
              <div className='section'>
                  <h3>Educational Employment</h3>
                  <PersonalInfo data={educationData} />
              </div>
              
              <div className='section'>
                  <h3>Socials</h3>
                  <PersonalInfo data={socialData} />
              </div>

              <div className='section'>
                  <h3>Guarantor</h3>
                  <PersonalInfo data={guarantorData} />
              </div>
              
          </div>
    </div>
  )
}

export default page