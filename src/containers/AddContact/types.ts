export interface IAddContactProps {
    openHomePage: () => void;
    addContact: (name: string, lastName: string, company: string, phoneNumbers: {}[]) => void;
}

export interface PhoneNumberInput {
    id: number;
    value: string;
  }