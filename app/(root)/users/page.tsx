"use client"

import { Column, Person } from '@/Types';
import Table from '@/components/table/Table'
import React, { useEffect, useState } from 'react'
import fakeData from '../../../MOCK_DATA.json';
import Stats from '@/components/stat/Stats';
import userIcon from '../../../public/avatar.png';
import StatCard from '@/components/stat/Stats';
import {User} from "@/Types/index"

const page = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiKey = '922j01hi8gjgr98r4mq954s9owt14on7w7n8g9s7'; // Replace with your actual API key or token
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

  console.log(users)
  
  const data = React.useMemo(() => fakeData as Person[], []);
  const userCount = 100;
  const columns: Column[] = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'University',
        accessor: 'university',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    []
  );
  return (
    <div>
      <div className="stat-cards">
        <StatCard title="Users" value="1,234" icon="👤" />
        <StatCard title="Revenue" value="$12,345" icon="💰" />
        <StatCard title="Orders" value="567" icon="📦" />
        <StatCard title="Orders" value="567" icon="📦" />
      </div>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default page