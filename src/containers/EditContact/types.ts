import { IContact } from "../../types";

export interface IEditContactProps {
contacts: IContact[],
editContact: (id: string, name: string, lastName: string, company: string, phoneNumbers: [string], emails: [string], selectedImage: any ) => void,
deleteContact: (id: string) => void
};


export interface PhoneNumberInput {
    id: number;
    value: string;
  }