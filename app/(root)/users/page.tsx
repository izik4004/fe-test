"use client"

import { Person } from '@/Types';
import Table from '@/components/table/Table'
import React, { useEffect, useState } from 'react'
import fakeData from '../../../MOCK_DATA.json';
import { IoIosArrowRoundBack } from "react-icons/io";
import StatCard from '@/components/stat/Stats';
import { User } from "@/Types/index";
import { Column } from 'react-table';
import { FaUsers } from "react-icons/fa6";
import { LiaCoinsSolid } from "react-icons/lia";
import Stats from '@/components/stat/Stats';


const Page = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiKey = ''; // Replace with your actual API key or token
      const response = await fetch('https://api.json-generator.com/templates/gQJiRwCJ5mJk/data', {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const columns: Column<User>[] = React.useMemo(() => [
    {
      Header: 'Organization',
      accessor: (row: User) => row.profile.organization,
      id: 'organization',
    },
    {
      Header: 'Name',
      accessor: (row: User) => row.profile.name,
      id: 'name',
    },
    {
      Header: 'Email',
      accessor: (row: User) => row.profile.email,
      id: 'email',
    },
    {
      Header: 'Phone Number',
      accessor: (row: User) => row.profile.phone,
      id: 'phone',
    },
    { Header: 'Date Joined', accessor: 'createdAt' },
    {
      Header: 'Status',
      accessor: (row: User) => row.profile.status,
      id: 'status',
    },
  ],
    []
  )

  const activeUsers = users.filter(user => user.status === 'Active');

  return (
    <div>
      
      
      <div className="stat-cards">
        <div className='page_title'>
          <h3>Users</h3>
        </div>
        <Stats
          title="USERS"
          value={users.length}
          icon={<FaUsers />}
          iconStyle={{ backgroundColor: '#FCE9FE', color: '#DF17FE' }}
        />
        <Stats
          title="ACTIVE USERS"
          value={activeUsers.length}
          icon={<FaUsers />}
          iconStyle={{ backgroundColor: '#EEE9FE', color: '#5719FF' }}
        />
        <Stats
          title="USERS WITH LOANS"
          value={0}
          icon={<LiaCoinsSolid />}
          iconStyle={{ backgroundColor: '#FFEEEC', color: '#F45F45' }}
        />
        <Stats
          title="USERS WITH SAVINGS"
          value={0}
          icon={<LiaCoinsSolid />}
          iconStyle={{ backgroundColor: '#FFEAF1', color: '#FF3266' }}
        />
      </div>
      <Table columns={columns} data={users} />
    </div>
  )
}

export default Page