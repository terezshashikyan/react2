export interface IContact {
  id: string;
  name: string;
  username?: string;
  image?: string;
  email?:[string] | [];
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: number;
      lng?: number;
    };
  };
  phone?: [string] | [];
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}

export type ISearchContactProps = {
  searchContact: (searchValue: string) => void;
} 
