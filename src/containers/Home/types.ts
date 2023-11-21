import { IContact } from "../../types";

export interface IHomePageProps {
  openAddContactPage: () => void;
  openContactPage: () => void;
  contacts: IContact[];
  handleContactsChange: (seachInput: string)=> void;
}
