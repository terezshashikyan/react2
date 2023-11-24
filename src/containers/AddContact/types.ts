export interface IAddContactProps {
    addContact: (name: string, lastName: string, company: string, phoneNumbers: {'id': number, value: string}[], emails: {'id': number, value: string}[], selectedImage: any ) => void;
}

export interface PhoneNumberInput {
    id: number;
    value: string;
  }