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
export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  university: string;
}

export interface Column {
  Header: string;
  accessor: keyof Person;
}

  