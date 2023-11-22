export interface IAddContactProps {
    addContact: (name: string, lastName: string, company: string, phoneNumbers: {}[], emails: {}[], selectedImage: any ) => void;
}

export interface PhoneNumberInput {
    id: number;
    value: string;
  }