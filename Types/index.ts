// types.ts
   import { TableState } from 'react-table';
  // types.ts
export interface SidebarLink {
    imgURL: string;
    route: string;
    label: string;
  }
  
  export interface SidebarLinks {
    section1: string;
    customersUrl: SidebarLink[];
    section2: string;
    businessUrl: SidebarLink[];
    section3: string;
    settingsUrl: SidebarLink[];
  }

 

export interface TableStateWithPagination extends TableState<Person> {
  pageIndex: number;
  pageSize: number;
}

// types.ts
// types.ts
export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  university: string;
  status: 'inactive' | 'active' | 'blacklisted' | 'pending'; // Define the status type
}

// Ensure your mock data (MOCK_DATA.json) includes this field for each person


export interface Column {
  Header: string;
  accessor: keyof Person;
}

  