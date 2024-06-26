import { Column, Person } from '@/Types';
import Table from '@/components/table/Table'
import React from 'react'
import fakeData from '../../../MOCK_DATA.json';
import Stats from '@/components/stat/Stats';
import userIcon from '../../../public/avatar.png';

const page = () => {
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
      <div>
        <Stats count={userCount} iconUrl={userIcon} />
      </div>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default page