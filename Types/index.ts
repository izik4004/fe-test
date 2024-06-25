// types.ts
  
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
  