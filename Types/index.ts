// types.ts
export interface Link {
    imgURL: string;
    route: string;
    label: string;
  }
  
  export interface SidebarLinks {
    question1: string;
    links1: Link[];
    question2: string;
    links2: Link[];
  }
  