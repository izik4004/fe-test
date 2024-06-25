import { Column, Person } from '@/Types';
import Table from '@/components/table/Table'
import React from 'react'
import fakeData from '../../../MOCK_DATA.json';

const page = () => {
  const data = React.useMemo(() => fakeData as Person[], []);

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
    ],
    []
  );
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default page