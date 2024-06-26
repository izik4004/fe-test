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


type UserKeys = keyof User;

interface UserColumn {
  Header: string;
  accessor: UserKeys;
}


interface UserProfile {
    username: any;
  name: string;
  company: string;
  dob: string; // Date of Birth
  gender: string;
  marital_status: string;
  type_of_residence: string;
  children: string;
  bank: string;
  account_number: number;
  address: string;
  email: string;
  phone: string
  status: string;
  createdAt: string; // Date
   organization: string;
}

interface UserEducation {
  level: string;
  employement_status: string;
  employment_sector: string;
  duration_of_employement: number;
  loan_repayment: number;
}

interface UserSocials {
    twitter: any;
    facebook: any;
    instagram: any;
  // Define properties if there are any, or leave it as an empty object
}

export interface TableStateWithPagination {
    pageIndex: number;
    pageSize: number;
}

export interface User {
  userguarantor: any;
  guarantor: any;
  id: string;
  phone: string;
  email: string;
  username: string;
  profile: UserProfile;
  education: UserEducation;
  socials: UserSocials;
  apiKey: string;
  organization: string;
  status: string;
  createdAt: string; // Date
  updatedAt: string; // Date
}
