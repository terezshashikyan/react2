import { IContact } from "../../types";

export interface IHomePageProps {
  openAddContactPage: () => void;
  openContactPage: () => void;
  contacts: IContact[] | [];
  handleContactsChange: (input: string) => void;
}
