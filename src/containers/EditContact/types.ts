import { IContact } from "../../types";

export interface IEditContactProps {
contacts: IContact[],
editContact: (id: string, name: string, lastName: string, company: string, phoneNumbers: {id: number, value: string}[] | [], emails: {id: number, value: string}[] | [], selectedImage: any ) => void,
deleteContact: (id: string) => void
};


