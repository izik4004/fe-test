"use client"
import React, { useEffect, useState } from 'react';
import "./Userdetails.scss";
import Image from 'next/image';
import person from "../../../../public/avatar1.png";
import PersonalInfo from '@/components/user/PersonalInfo';
import { User } from '@/Types';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';


const Page = () => {
    const [user, setUser] = useState<User | null>(null);
    const [activeTab, setActiveTab] = useState<string>('General Details');

    useEffect(() => {
        const storedUser = localStorage.getItem('selectedUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

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
        { label: 'Relationship', value: user.guarantor.relationship },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'General Details':
                return (
                    <div className='personal_info_wrapper'>
                        <div className='section'>
                            <PersonalInfo data={profileData} title='Personal Information' />
                        </div>
                        <div className='section'>
                            <PersonalInfo data={educationData} title='Educational Employment' />
                        </div>
                        <div className='section'>
                            <PersonalInfo data={socialData} title='Socials' />
                        </div>
                        <div className='section'>
                            <PersonalInfo data={guarantorData} title='Guarantor' />
                        </div>
                    </div>
                );
            case 'Documents':
                return <div >Documents </div>;
            case 'Bank Details':
                return <div>Bank Details </div>;
            case 'Loans':
                return <div>Loans </div>;
            case 'Savings':
                return <div>Savings </div>;
            case 'App and System':
                return <div>App and System </div>;
            default:
                return <div>General Details </div>;
        }
    };

    return (
        <div>
            <Link href="/users">
                <div className='return_arrow'>
                    <IoIosArrowRoundBack size={20} />
                    <span>Back to Users</span>
                </div>
            </Link>
            <div className='page_title'>
              
                <h3>Users</h3>
                <div className='page_button'>
                    <button className='blacklist'>BLACKLIST USER</button>
                    <button className='activate'>ACTIVATE USER</button>
                </div>
            </div>
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
                        <li className={activeTab === 'General Details' ? 'active' : ''} onClick={() => setActiveTab('General Details')}>General Details</li>
                        <li className={activeTab === 'Documents' ? 'active' : ''} onClick={() => setActiveTab('Documents')}>Documents</li>
                        <li className={activeTab === 'Bank Details' ? 'active' : ''} onClick={() => setActiveTab('Bank Details')}>Bank Details</li>
                        <li className={activeTab === 'Loans' ? 'active' : ''} onClick={() => setActiveTab('Loans')}>Loans</li>
                        <li className={activeTab === 'Savings' ? 'active' : ''} onClick={() => setActiveTab('Savings')}>Savings</li>
                        <li className={activeTab === 'App and System' ? 'active' : ''} onClick={() => setActiveTab('App and System')}>App and System</li>
                    </ul>
                </div>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    );
}

export default Page;
